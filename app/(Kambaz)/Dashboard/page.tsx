import Link from "next/link";
import Image from "next/image";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
import * as db from "../Database";
export default function Dashboard() {

    const courses = db.courses;

    return (
        <div id="dashboard">
            <h1>
                Kambaz Dashboard
            </h1>
            <hr />
            <h3>
                Published Courses:
            </h3>
            <hr />
            <div id="dashboard-course-list">


                <Row xs={1} md={5} className="g-4">
                    {courses.map((course) => (
                        <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link href={`/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                                    <CardImg src={(course.cardImg)} variant="top" width="100%" height={160} />
                                    <CardBody className="card-body">
                                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name} </CardTitle>
                                        <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            {course.description} </CardText>
                                        <Button variant="primary"> Go </Button>
                                    </CardBody>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        </div>
    )
}