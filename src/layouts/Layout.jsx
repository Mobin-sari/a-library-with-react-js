import PropTypes from 'prop-types';
import styles from "./layout.module.css" 

function Layout({ child }) {
    
    return (
        <>
        <header className={styles.header}>
            <h2>Book App</h2>
            <p>
                <a href="./">Botostart</a> | Library with React.JS
            </p>
        </header>
        { child }
        <footer className={styles.footer}>
            <p>Developed by Mobin ❤</p>
        </footer>
        </> 
    ); 
}
Layout.propTypes = {
    child: PropTypes.string
}
export default Layout;