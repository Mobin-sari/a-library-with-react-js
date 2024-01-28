import { useState } from "react";
// API
import { books as bookData } from "../constants/mockData";
// styles 
import styles from "./books.module.css"
// farmer motion
import { motion } from "framer-motion"
// components
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";
// import objects of framer motion
import { itemCards, itemSideCards, containerCards, containerSideCards } from "../module/framerMotion.js";

function Books() {
    // states:
    const [book, setBook] = useState(bookData)
    const [liked, setLiked] = useState([]);
    const [search, setSearch] = useState([]);
    // a function for handling of like books.
    const handleLikedList = (books, status) => {
        if(status) {
            // remove like.
            const newLikedList = liked.filter((index) => index.id !== books.id);
            setLiked(newLikedList);
        } else {
            // like books.
            setLiked((liked) => [...liked, books]);
        }
    };
    // a function for handling of search in books.
    const searchHandler = () => {
        if (search) {
            const newBooks = bookData.filter((book) => 
                book.title.toLowerCase().includes(search)
            );
            setBook(newBooks)
        } else {
            setBook(book)
        }
    }

    return (
        <>
            <SearchBox 
                search={search} 
                setSearch={setSearch}
                searchHandler={searchHandler}
            />
            <div className={styles.container}>
                <motion.div
                    className={styles.cards}
                    variants={containerCards}
                    initial="hidden"
                    animate="visible"
                >
                    {book.map((book) => (
                        <motion.li
                        key={book.id}
                        className="item" 
                        variants={itemCards}
                        >
                            <BookCard data={book} handleLikedList={handleLikedList}/>
                        </motion.li>
                    ))}
                </motion.div>
                {!!liked.length && 
                    <motion.div 
                        className={styles.favorite}
                        variants={containerSideCards}
                        initial="hidden"
                        animate="visible"
                    >
                        <h4>Favorites</h4>
                        {liked.map(book =>
                            <motion.div variants={itemSideCards} key={book.id}>
                                <SideCard  data={book}/>
                            </motion.div>)}
                    </motion.div>
                }
            </div>
        </>
    );
}

export default Books;