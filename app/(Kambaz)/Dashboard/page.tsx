"use client"
import { useState } from "react";

import Link from "next/link";

import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import * as db from "../Database";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";

export default function Dashboard() {

    //const [courses, setCourses] = useState<any[]>(db.courses);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        cardImg: "/images/reactjs.jpg", description: "New Description"
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const dispatch = useDispatch();

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
            <h5>New Course:
                <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => dispatch(addNewCourse(course))} > Add </button>
                <button className="btn btn-warning float-end me-2"
                    onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
                    Update </button>
            </h5>
            <br />
            <FormControl value={course.name} className="mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <FormControl value={course.description}
                onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            <hr />

            <hr />
            <div id="dashboard-course-list">


                <Row xs={1} md={5} className="g-4">
                    {

                        // @ts-expect-error: courses is implicitly any
                        courses.map((course) => (
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
                                    <button onClick={(event) => {
                                        event.preventDefault();
                                        dispatch(deleteCourse(course._id));
                                    }} className="btn btn-danger float-end"
                                        id="wd-delete-course-click">
                                        Delete
                                    </button>
                                    <button id="wd-edit-course-click"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}
                                        className="btn btn-warning me-2 float-end" >
                                        Edit
                                    </button>

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