// import PropTypes from 'prop-types';
import { useState } from "react";
import { books } from "../constants/mockData";

import BookCard from "./BookCard";

import styles from "./books.module.css"

import { motion } from "framer-motion"
import SideCard from "./SideCard";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
};  
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
};

Books.propTypes = {
    
};

function Books() {
    const [liked, setLiked] = useState([]);

    const handleLikedList = (books, status) => {
        if(status) {
            // remove like.
            const newLikedList = liked.filter((index) => index.id !== books.id);
            setLiked(newLikedList);
        } else {
            // like books.
            setLiked((liked) => [...liked, books]);
        }
    }

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.cards}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {books.map((book) => (
                    <motion.li
                    key={book.id}
                    className="item" 
                    variants={item}
                    >
                        <BookCard data={book} handleLikedList={handleLikedList}/>
                    </motion.li>
                ))}
            </motion.div>
            {!!liked.length && 
            <div className={styles.favorite}>
                <h4>Favorites</h4>
                {liked.map(book => <SideCard key={book.id} data={book}/>)}
            </div>}
        </div>
    );
}

export default Books;