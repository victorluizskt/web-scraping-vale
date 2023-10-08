import React, { ReactNode } from "react";
import Label from "../label";

interface ModalProps {
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => (
  <>
    <Label />
    <div 
        style={{ 
            width: "620px", 
            height: "400px", 
            backgroundColor: "white",
            marginTop: "10px",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
            borderRadius: "30px",
        }}
    >
        {children}
    </div>
  </>
);

export default Modal;
