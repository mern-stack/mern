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
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  onSubmit = () => {
    
  };
  onChange = event => {
    return this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} className="pt-5">
            <div className="card shadow">
              <div className="card-header">Login</div>
              <div className="card-body">
                <Form onSubmit={this.onSubmit}>
                  <FormGroup row>
                    <Label className="text-md-right" for="email" sm={4}>
                      Email
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onchange}
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
                        value={this.state.email}
                        onChange={this.onchange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 4 }}>
                      <Button size="md">Login</Button>
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
export default Login;
