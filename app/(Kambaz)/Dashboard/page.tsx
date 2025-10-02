import Link from "next/link";
import Image from "next/image";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard() {
    return (
        <div id="dashboard">
            <h1>
                Kambaz Dashboard
            </h1>
            <hr/>
            <h3>
                Published Courses:
            </h3>
            <hr/>
            <div id="dashboard-course-list">


            <Row xs={1} md={5} className="g-4">
                <Col className="wd-dashboard-course-list" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/Courses/001" className="dashboard-course-link text-decoration text-dark">
                            <CardImg variant="top" src="/images/reactjs1.jpg" width="100%" height={160}/>
                            <CardBody>
                                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                    CS001 React JS
                                </CardTitle>
                                <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Specialization: Full Stack Software Developer
                                </CardText>
                                <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>         
                </Col>
                <Col className="wd-dashboard-course-list" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/Courses/002" className="dashboard-course-link text-decoration text-dark">
                            <CardImg variant="top" src="/images/angular.jpg" width="100%" height={160}/>
                            <CardBody>
                                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                    CS002 Angular JS
                                </CardTitle>
                                <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Specialization: Full Stack Software Developer
                                </CardText>
                                <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course-list" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/Courses/003" className="dashboard-course-link text-decoration text-dark">
                            <CardImg variant="top" src="/images/vuejs1.jpg" width="100%" height={160}/>
                            <CardBody>
                                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                    CS003 Vue JS
                                </CardTitle>
                                <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Specialization: Full Stack Software Developer
                                </CardText>
                                <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course-list" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/Courses/004" className="dashboard-course-link text-decoration text-dark">
                            <CardImg variant="top" src="/images/c++.png" width="100%" height={160}/>
                            <CardBody>
                                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                    CS004 C++
                                </CardTitle>
                                <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Specialization: Full Stack Software Developer
                                </CardText>
                                <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course-list" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/Courses/005" className="dashboard-course-link text-decoration text-dark">
                            <CardImg variant="top" src="/images/python.jpeg" width="100%" height={160}/>
                            <CardBody>
                                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                    CS005 Python
                                </CardTitle>
                                <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Specialization: Full Stack Software Developer
                                </CardText>
                                <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course-list" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/Courses/006" className="dashboard-course-link text-decoration text-dark">
                            <CardImg variant="top" src="/images/javascript.png" width="100%" height={160}/>
                            <CardBody>
                                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                    CS006 Javascript
                                </CardTitle>
                                <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Specialization: Full Stack Software Developer
                                </CardText>
                                <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course-list" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/Courses/007" className="dashboard-course-link text-decoration text-dark">
                            <CardImg variant="top" src="/images/golang.png" width="100%" height={160}/>
                            <CardBody>
                                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                    CS007 Golang
                                </CardTitle>
                                <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Specialization: Full Stack Software Developer
                                </CardText>
                                <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
            </Row>
            </div>
        </div>
    )
}