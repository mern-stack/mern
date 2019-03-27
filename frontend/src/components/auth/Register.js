import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  FormGroup,
  Label,
  FormFeedback,
  Input,
  Form,
  Button
} from "reactstrap";
import { register } from "../../actions/authActions";
import { connect } from "react-redux";
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
  }
  onChange = event => {
    return this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.register(this.state);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} className="pt-5">
            <div className="card shadow">
              <div className="card-header">Register</div>
              <div className="card-body">
                <Form onSubmit={this.onSubmit}>
                  <FormGroup row>
                    <Label className="text-md-right" for="name" sm={4}>
                      Name
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label className="text-md-right" for="email" sm={4}>
                      Email
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label className="text-md-right" for="password" sm={4}>
                      Password
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
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
                        type="confirm_password"
                        name="confirm_password"
                        value={this.state.confirm_password}
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 4 }}>
                      <Button size="md">Register</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { register }
)(Register);
