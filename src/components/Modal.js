import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal() {
    // in order not to scroll up and down
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  // to avoid modal from being affected positioning by other elements 
  return ReactDOM.createPortal(
    <div>
      <div className="modal-container"></div>
    </div>,
    document.querySelector("#modal")
  );
}

export default Modal;
