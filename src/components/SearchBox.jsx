import { MdSearch } from "react-icons/md";

import styles from "./searchbox.module.css";

function SearchBox({ search, setSearch, searchHandler }) {
    return (
        <div className={styles.search}>
            <input 
                type="text" 
                placeholder='Search title' 
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <button onClick={searchHandler}><MdSearch /></button>
        </div>
    );
}

export default SearchBox;