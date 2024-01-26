import PropTypes from 'prop-types';

import { motion } from "framer-motion"

import { useState } from 'react';

import styles from "./bookcard.module.css"

import { FaHeart } from "react-icons/fa";

BookCard.propTypes = {
    data: PropTypes.string.isRequred,
    handleLikedList: PropTypes.string.isRequired
};

function BookCard({ data, handleLikedList }) {
    const {title, author, image, language, pages} = data;
    const [like, setLike] = useState(false)

    const likeHandler = () => {
        setLike((like) => !like);
        handleLikedList( data, like )
    };

    return (
        <div className={styles.card}>
            <img src={image} alt={title}/>
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{author}</p>
                <div>
                    <span>{language}</span>
                    <span>{pages} pages</span>
                </div>
            </div>
                <motion.button 
                    onClick={likeHandler}
                    initial={{ scale: 1 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 100
                    }}
                >
                    <FaHeart 
                        color={like ? "red" : "#fff"}
                        fontSize="1.4rem"
                    />
                </motion.button>
        </div>
    );
}

export default BookCard;