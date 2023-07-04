// react
import React, { useEffect, useState } from "react";
// mui
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

type props = {
    title: string;
    message: string;
    onAccept: () => void;
    onClose: () => void;
    open: boolean;
};

export const CommonDialog = ({ title, message, onAccept, onClose, open }: props) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    // 承諾（OK または YES ボタンをクリック）した時
    const handleAccept = () => {
        handleClose();
        onAccept();
    };

    // ダイアログクローズ
    const handleClose = () => {
        setDialogOpen(false);
        onClose();
    };

    // openの値が変化した時
    useEffect(() => setDialogOpen(open), [open]);

    return (
        <Dialog open={dialogOpen} disableScrollLock={true}>
            <DialogTitle>
                <span>{title}</span>
            </DialogTitle>
            <DialogContent>
                <Box>{message}</Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleAccept}>OK</Button>
            </DialogActions>
        </Dialog>
    );
};
