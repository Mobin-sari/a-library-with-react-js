import PropTypes from 'prop-types';

import styles from "./sidecard.module.css"

SideCard.propTypes = {
    data: PropTypes.string.isRequired
};

function SideCard({ data: {image, title} }) {

    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <p>{title}</p>        
        </div>
    );
}

export default SideCard;