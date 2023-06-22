/* eslint-disable @typescript-eslint/no-empty-function */
"use client";
// react
import React from "react";
// next.js
import Link from "next/link";
import Image from "next/image";
// style
import styles from "./Header.module.scss";
// components
// image
import BannerImage from "../images/Banner2.png";

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "auto",
    });
};

const bannerBtnToggle = () => {
    scrollToTop();
};

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <Link href="/" onClick={bannerBtnToggle}>
                    <Image
                        src={BannerImage.src}
                        className={styles.banner_image}
                        alt="banner"
                        width={1920}
                        height={177}
                    />
                </Link>
            </div>
        </header>
    );
};
