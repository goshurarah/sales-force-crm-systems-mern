import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";

function NotificationDisplay({ message }) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    // Set show to true after 1 second
    setTimeout(() => {
      setShow(true);
    }, 1000);
  };

  return (
    <div>
      {message === "" ? null : (
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{
            position: "fixed",
            top: 5,
            right: 5,
            zIndex: 1000,
            backgroundColor: "#87CEF6", // Set the background color here
          }}
        >
          <Toast show={show} autohide={false} onClose={handleClose}>
            <Toast.Header>
              <strong className="mr-auto ml-5"></strong>
            </Toast.Header>
            <Toast.Body>
              {message}
            </Toast.Body>
          </Toast>
        </div>
      )}
    </div>
  );
}

export default NotificationDisplay;
