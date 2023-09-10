"use client";
// react
import React from "react";
// next.js
import Image from "next/image";
// style
import styles from "./page.module.scss";
// resource
import TitleImagePath from "../images/Title2.png";
// components
import { Spacer } from "@/components/atoms/Spacer";
import { Form } from "@/components/organisms/Form";
import { ContactForm } from "@/components/organisms/ContactForm";

export default function Home() {
    return (
        <>
            <Spacer size="10px" />
            <div className={styles.main}>
                {/* <h1 className={styles.title}>TFT Profile Card</h1> */}
                <h1>
                    <Image
                        className={styles.title_img}
                        src={TitleImagePath}
                        width={1384}
                        height={490}
                        alt="TFT Profile Card"
                    />
                </h1>
                <Form />
                <ContactForm />
            </div>
        </>
    );
}
