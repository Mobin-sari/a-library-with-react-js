// import PropTypes from 'prop-types';
import { books } from "../constants/mockData";

import BookCard from "./BookCard";

import styles from "./books.module.css"

import { motion } from "framer-motion"

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
    return (
        <div className={styles.container}>
            <motion.div
                className="container"
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
                        <BookCard data={book} />
                    </motion.li>
                ))}
            </motion.div>
        </div>
    );
}

export default Books;