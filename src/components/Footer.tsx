// react
import React from "react";
// style
import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <small className={styles.copy}>&copy;TFT Profile Card All Rights Reserved.</small>
        </footer>
    );
};
