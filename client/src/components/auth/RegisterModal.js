import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { register } from "../../action/authActions";

const RegisterModal = (props) => {
  const [state, setState] = useState({
    modal: false,
    name: null,
    password: null,
  });

  const toggle = () => {
    setState({
      ...state,
      modal: !state.modal,
    });
  };

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, password } = state;
    const newUser = {
      name,
      password,
    };
    //Attempt to register
    props.register(newUser);
    toggle();
  };

  return (
    <>
      <Link className="nav__item-right-color" to="#" onClick={toggle} replace>
        Register
      </Link>
      <Modal isOpen={state.modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={onChange}
                className="input-margin"
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={onChange}
                className="input-margin"
              />
              <Button className="register-btn" color="dark" block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(RegisterModal);
