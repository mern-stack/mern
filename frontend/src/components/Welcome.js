import React, { Component } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from "reactstrap";
// Featured Content : Stateless Component
const FeaturedContent = () => (
  <div className="container">
    <h2 className="font-weight-light text-center">Featured Content</h2>
    <CardColumns>
      <Card>
        <CardImg
          width="100%"
          src="https://via.placeholder.com/256x180.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg
          width="100%"
          src="https://via.placeholder.com/256x180.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg
          width="100%"
          src="https://via.placeholder.com/256x180.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardColumns>
  </div>
);
// Featured Content Ends Here

class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center">
                <h1 className="font-weight-light">Welcome To MERN Starter</h1>
                <p className="lead">
                  A great starter layout for a landing page
                </p>
              </div>
            </div>
          </div>
        </header>
        <section className="py-5">
          <FeaturedContent />
        </section>
      </React.Fragment>
    );
  }
}

export default Welcome;
