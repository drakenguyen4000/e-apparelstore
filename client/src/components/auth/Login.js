import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../action/authActions";
import { useEffect, useState } from "react";

const Login = (props) => {
  const [state, setState] = useState({
    name: "",
    password: "",
  });
  
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, password } = state;
    const user = {
      name,
      password,
    };
    props.login(user);
  };
  return (
    <div className="login">
      <Form onSubmit={onSubmit}>
        <FormGroup className="login__form-group">
          <h2 className="login__title">Please Login</h2>
          <Label for="name">Username</Label>
          <Input
            type="text"
            name="name"
            id="name"
            minlength="6"
            maxLength="20"
            placeholder="Username"
            onChange={handleChange}
            value={state.name}
            className="input-margin"
          />
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            value={state.password}
            className="input-margin"
          />
          <Button className="submit-btn" color="dark">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { login })(Login);
