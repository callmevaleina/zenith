import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

interface IAlertModalProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const AlertModal = ({ open, onClose, message }: IAlertModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography id="alert-modal-description" sx={{ mt: 2, fontWeight: 500, fontFamily: 'sans-serif', fontSize: 24 }}>
          {message}
        </Typography>
        <Button
          onClick={onClose}
          sx={{
            mt: 3,
            bgcolor: "#ff545a",
            color: "white",
            "&:hover": {
              bgcolor: "white",
              color: "#ff545a",
              border: "1px solid #ff545a",
            },
          }}
        >
          Ok
        </Button>
      </Box>
    </Modal>
  );
};

export default AlertModal;
