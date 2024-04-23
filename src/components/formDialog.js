import { Dialog, DialogTitle } from "@mui/material";
import React from "react";

function formDialog() {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
    </Dialog>
  );
}

export default formDialog;
