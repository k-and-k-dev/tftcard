// react
import React, { ReactNode } from "react";
// style
import styles from "./Modal.module.scss";
// mui
import { Button } from "@mui/material";

type Props = {
    show: boolean;
    setShow: (show: boolean) => void;
    children: ReactNode;
};

export const Modal = ({ show, setShow, children }: Props) => {
    const closeModal = () => {
        setShow(false);
    };
    if (show) {
        return (
            <div className={styles.overlay} onClick={closeModal}>
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                    {children}
                    <p className={styles.button_close}>
                        <Button variant="text" onClick={closeModal}>
                            ×
                        </Button>
                    </p>
                </div>
            </div>
        );
    } else {
        return null;
    }
};
