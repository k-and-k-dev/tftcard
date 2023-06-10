/* eslint-disable @typescript-eslint/no-empty-function */
"use client";
// react
import React from "react";
// next.js
import Link from "next/link";
// style
import styles from "./Header.module.scss";
// components
// image
import logoImage from "./../images/logo.png";

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "auto",
    });
};

const logoBtnToggle = () => {
    scrollToTop();
};

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.container}>
                    <p className={styles.logo_image}>
                        <Link href="/" onClick={logoBtnToggle}>
                            <img src={logoImage.src} alt="logo" width={50} height={50} />
                        </Link>
                    </p>
                    <p className={styles.logo_text_denomination}>My TFT Profile Card</p>
                </div>
            </div>
        </header>
    );
};