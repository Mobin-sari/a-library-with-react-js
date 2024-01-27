import PropTypes from 'prop-types';
// styles
import styles from "./layout.module.css" 

Layout.propTypes = {
    children: PropTypes.string.isRequired
}

function Layout({ children }) {
    
    return (
        <>
            <header className={styles.header}>
                <h2>Book App</h2>
                <p>
                    <a href="./">github</a> | Library with React.JS
                </p>
            </header>
            <div>
                { children }
            </div>
            <footer className={styles.footer}>
                <p>Developed by Mobin ❤</p>
            </footer>
        </> 
    ); 
}
export default Layout;