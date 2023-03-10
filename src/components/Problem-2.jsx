import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Problem2 = () => {
  const [show, setShow] = useState(false);
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);

  const handleCloseModalA = () => setShowModalA(false);
  const handleShowModalA = () => setShowModalA(true);

  const handleCloseModalB = () => setShowModalB(false);
  const handleShowModalB = () => setShowModalB(true);

  const handleModalButtonClick = (modalName) => {
    if (modalName === "a") {
      handleCloseModalB();
      handleShowModalA();
    } else if (modalName === "b") {
      handleCloseModalA();
      handleShowModalB();
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5 ">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          {/* <Button className="btn btn-lg btn-outline-warning" onClick={handleShowModalA}>All Contacts</Button> */}
          <Button variant="outline-primary btn-lg" onClick={handleShowModalA}>
            All Contacts
          </Button>
          {/* <Button className="" onClick={handleShowModalB}>US Contacts</Button> */}
          <Button variant="outline-warning btn-lg" onClick={handleShowModalB}>
            US Contacts
          </Button>

          <Modal show={showModalA} onHide={handleCloseModalA}>
            <Modal.Header closeButton>
              <Modal.Title>Modal A</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex justify-content-center gap-3 ">
                <Button
                  variant="outline-primary btn-lg"
                  onClick={() => handleModalButtonClick("a")}
                >
                  All Contacts
                </Button>
                <Button
                  variant="outline-warning btn-lg"
                  onClick={() => handleModalButtonClick("b")}
                >
                  US Contacts
                </Button>
                <Button
                  variant="outline-danger btn-lg"
                  onClick={handleCloseModalA}
                >
                  Close
                </Button>
              </div>
            </Modal.Body>
            <Modal.Footer>
            
              <label>Check Box</label>
              <input
                type="checkbox"
              />
            </Modal.Footer>
          </Modal>

          <Modal show={showModalB} onHide={handleCloseModalB}>
            <Modal.Header closeButton>
              <Modal.Title>Modal B</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className="d-flex justify-content-center gap-3 ">
                <Button
                  variant="outline-primary btn-lg"
                  onClick={() => handleModalButtonClick("a")}
                >
                  All Contacts
                </Button>

                <Button
                  variant="outline-warning btn-lg"
                  onClick={() => handleModalButtonClick("b")}
                >
                  US Contacts
                </Button>
                <Button
                  variant="outline-danger btn-lg"
                  onClick={handleCloseModalB}
                >
                  Close
                </Button>
              </div>
            </Modal.Body>
            <Modal.Footer >
              <label>Check Box</label>
              <input
                type="checkbox"
              />
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
    
  );
};

export default Problem2;
