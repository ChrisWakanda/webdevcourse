import Link from "next/link";
import { Button, Col, FormControl, FormLabel, InputGroup, Row } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <br/>
      <div className="p-3">
        <Row>
          <h2>Your Profile:</h2>
        </Row>
        <Row className="p-1">
          <FormLabel column sm={3}>Username:</FormLabel>
          <Col sm={9}>
            <FormControl defaultValue="Alice"></FormControl>
          </Col>
        </Row>
        <Row className="p-1">
          <FormLabel column sm={3}>Password:</FormLabel>
          <Col sm={9}>
            <FormControl defaultValue="12345"></FormControl>
          </Col>
        </Row>
        <Row className="p-1">
          <FormLabel column sm={3}>First Name:</FormLabel>
          <Col sm={9}>
            <FormControl defaultValue="Alice"></FormControl>
          </Col>
        </Row>
        <Row className="p-1">
          <FormLabel column sm={3}>Last Name:</FormLabel>
          <Col sm={9}>
            <FormControl defaultValue="Wonderland"></FormControl>
          </Col>
        </Row>
        <Row className="p-1">
          <FormLabel column sm={3}>Date of Birth:</FormLabel>
          <Col sm={9}>
            <InputGroup>
              <FormControl type="date" defaultValue="2002-04-24"></FormControl>
            </InputGroup>
          </Col>
        </Row>
        <Row className="p-1">
          <FormLabel column sm={3}>Email:</FormLabel>
          <Col sm={9}>
            <FormControl defaultValue="alice@gmail.com"></FormControl>
          </Col>
        </Row>
        <Row className="p-1">
          <FormLabel column sm={3}>Role:</FormLabel>
          <Col sm={9}>
            <FormControl defaultValue="User"></FormControl>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={3}>
          </Col>
          <Col sm={9} className="d-grid">
            <Button href="/Account/Signin" variant="danger" size="sm" id="wd-add-module-btn">
              Sign out
            </Button>
          </Col>
        </Row>
      </div>
    </div>
);}
