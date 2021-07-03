import React, { Component } from "react";
import { Container, Row, Col, Alert, Button, Badge, Breadcrumb, Card } from "react-bootstrap";

class App extends Component {
  render(){
      return (
      <div className="mt-5">
        <Row>
          <Col md="6">
            <Col md="6">
              <Alert key="1" variant="primary">
                Website React Bootstrap
                </Alert>
            </Col>
          </Col>
          <Col md="6">
            <Col md="6">
              <span><Button variant="primary">
              Notification <Badge bg="secondary">9</Badge>
            </Button>
            <Button variant="primary">
              Message <Badge bg="secondary">19</Badge>
          </Button></span>
            </Col>
          </Col>
          <Col md="3">
          </Col>
        </Row>
        <Row>
          <Col md="8">
        </Col>
        <Col md="4">
          <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Berita
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Bola</Breadcrumb.Item>
        </Breadcrumb>
        </Col>
        </Row>

        <Container>
        <Row>
          <Col md="3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
              <Card.Body>
                <Card.Title>Diego Godin Ukir Rekor Spesial Lawan Thailand</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
              <Card.Body>
                <Card.Title>Meymar Bahas Kontrak Baru Di Paris Saint-Germani</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
              <Card.Body>
                <Card.Title>Inggris Mau Jadi Tim Terbaik Di Dunia</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
              <Card.Body>
                <Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
