//client/src/compnonents/ItemModal.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
} from "reactstrap";

const MockDataModal = () => {
  const [state, setState] = useState({
    modal: false,
  });

  const toggle = () => {
    setState({
      ...state,
      modal: !state.modal,
    });
  };

  return (
    <>
      <Link to="#" onClick={toggle} replace>
        <Button className="help-btn">
          ?
        </Button>
      </Link>
      <Modal isOpen={state.modal} toggle={toggle}>
        <ModalHeader className="modal-header" toggle={toggle}><strong>Mock Credit Card Data</strong></ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <p>
                Email: Your email (or drakeknguyen@yahoo.com)
                <br />
                Name: Any <br />
                Street: Any <br />
                City: Any <br />
                Card Number: 4242 4242 4242 4242
                <br />
                Date: 04/30 <br/>
                CVC: 323
              </p>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default MockDataModal;
