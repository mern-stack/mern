import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password
    };

    this.props.registerUser(newUser, this.props.history);
    if (!this.state.errors.length > 0) {
      this.setState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        errors: {}
      });
    }
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="container h-100">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Card>
              <CardHeader>Register</CardHeader>
              <CardBody>
                {/* Form Starts Here */}
                <Form noValidate onSubmit={this.onSubmit}>
                  <FormGroup row>
                    <Label className="text-md-right" for="name" sm={4}>
                      Name
                    </Label>
                    <Col sm={8}>
                      <Input
                        invalid={errors.name}
                        type="name"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      <FormFeedback>{errors.name}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label className="text-md-right" for="email" sm={4}>
                      Email
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="email"
                        invalid={errors.email}
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      <FormFeedback>{errors.email}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label className="text-md-right" for="password" sm={4}>
                      Password
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="password"
                        invalid={errors.password}
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                      <FormFeedback>{errors.password}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      className="text-md-right"
                      for="confirm_password"
                      sm={4}
                    >
                      Confirm Password
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="password"
                        name="confirm_password"
                        invalid={errors.confirm_password}
                        id="confirm_password"
                        value={this.state.confirm_password}
                        onChange={this.onChange}
                      />
                      <FormFeedback>{errors.confirm_password}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 4 }}>
                      <Button color="primary">Register</Button>
                    </Col>
                  </FormGroup>
                </Form>

                {/* Form Ends Here */}
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
