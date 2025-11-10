// "use client"
// import { useEffect, useState } from "react";

// import Link from "next/link";

// import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
// //import * as db from "../Database";
// import * as client from "../Courses/client";
// import any from "../store";
// import { v4 as uuidv4 } from "uuid";
// import { useDispatch, useSelector } from "react-redux";
// import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
// //import setCourses from "../Courses/reducer";
// import { enrollCourse, unenrollCourse } from "./reducer";

// export default function Dashboard() {

//     //const [courses, setCourses] = useState<any[]>(db.courses);

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const [course, setCourse] = useState<any>({
//         _id: "0", name: "New Course", number: "New Number",
//         startDate: "2023-09-10", endDate: "2023-12-15",
//         cardImg: "/images/reactjs.jpg", description: "New Description"
//     });

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const { courses } = useSelector((state: any) => state.coursesReducer);
//     const dispatch = useDispatch();

//     const [showAllCourses, setShowAllCourses] = useState(false);

//     const isEnrolled = (courseId: string) => {
//         return enrollments.some(
//             // eslint-disable-next-line @typescript-eslint/no-explicit-any
//             (enrollment: any) =>
//                 enrollment.user === currentUser?._id &&
//                 enrollment.course === courseId
//         );
//     };

//     const handleEnroll = (courseId: string) => {
//         if (currentUser) {
//             dispatch(enrollCourse({ userId: currentUser._id, courseId }));
//         }
//     };

//     const handleUnenroll = (courseId: string) => {
//         if (currentUser) {
//             dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
//         }
//     };

//     const displayedCourses = showAllCourses
//         ? courses
//         : courses.filter((course: { _id: string; }) => isEnrolled(course._id));

//     const fetchCourses = async () => {
//         try {
//             const courses = await client.findMyCourses();
//             dispatch(setCourses(courses));
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     useEffect(() => {
//         fetchCourses();
//     }, [currentUser]);


//     return (
//         <div id="dashboard">
//             <h1>
//                 Kambaz Dashboard
//                 {currentUser && (
//                     <Button
//                         variant="primary"
//                         className="float-end"
//                         onClick={() => setShowAllCourses(!showAllCourses)}
//                     >
//                         Enrollments
//                     </Button>
//                 )}
//             </h1>
//             <hr />
//             <h3>
//                 Published Courses:
//             </h3>
//             <hr />
//             {currentUser?.role === "FACULTY" && (
//                 <>
//                     <h5>New Course:
//                         <button className="btn btn-primary float-end"
//                             id="wd-add-new-course-click"
//                             onClick={() => dispatch(addNewCourse(course))} > Add </button>
//                         <button className="btn btn-warning float-end me-2"
//                             onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
//                             Update </button>
//                     </h5>
//                     <br />
//                     <FormControl value={course.name} className="mb-2"
//                         onChange={(e) => setCourse({ ...course, name: e.target.value })} />
//                     <FormControl value={course.description}
//                         onChange={(e) => setCourse({ ...course, description: e.target.value })} />
//                     <hr />
//                 </>
//             )}

//             <hr />
//             <div id="dashboard-course-list">


//                 <Row xs={1} md={5} className="g-4">
//                     {courses
//                         // @ts-expect-error: courses is implicitly any
//                         .map((course) => (
//                             <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
//                                 <Card>
//                                     <Link href={`/Courses/${course._id}/Home`}
//                                         className="wd-dashboard-course-link text-decoration-none text-dark" >
//                                         <CardImg src={(course.cardImg)} variant="top" width="100%" height={160} />
//                                         <CardBody className="card-body">
//                                             <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                                                 {course.name} </CardTitle>
//                                             <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                                                 {course.description} </CardText>
//                                             <Button variant="primary"> Go </Button>

//                                             {currentUser && showAllCourses && (
//                                                 <>
//                                                     {isEnrolled(course._id) ? (
//                                                         <button
//                                                             onClick={(event) => {
//                                                                 event.preventDefault();
//                                                                 handleUnenroll(course._id);
//                                                             }}
//                                                             className="btn btn-danger float-end"
//                                                         >
//                                                             Unenroll
//                                                         </button>
//                                                     ) : (
//                                                         <button
//                                                             onClick={(event) => {
//                                                                 event.preventDefault();
//                                                                 handleEnroll(course._id);
//                                                             }}
//                                                             className="btn btn-success float-end"
//                                                         >
//                                                             Enroll
//                                                         </button>
//                                                     )}
//                                                 </>
//                                             )}

//                                             {currentUser?.role === "FACULTY" && (
//                                                 <>
//                                                     <button onClick={(event) => {
//                                                         event.preventDefault();
//                                                         dispatch(deleteCourse(course._id));
//                                                     }} className="btn btn-danger float-end"
//                                                         id="wd-delete-course-click">
//                                                         Delete
//                                                     </button>
//                                                     <button id="wd-edit-course-click"
//                                                         onClick={(event) => {
//                                                             event.preventDefault();
//                                                             setCourse(course);
//                                                         }}
//                                                         className="btn btn-warning me-2 float-end" >
//                                                         Edit
//                                                     </button>
//                                                 </>
//                                             )}

//                                         </CardBody>
//                                     </Link>
//                                 </Card>
//                             </Col>
//                         ))}
//                 </Row>

//             </div>
//         </div>
//     )
// }







// "use client"
// import { useEffect, useState } from "react";

// import Link from "next/link";

// import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
// //import * as db from "../Database";
// import * as client from "../Courses/client";
// import any from "../store";
// import { v4 as uuidv4 } from "uuid";
// import { useDispatch, useSelector } from "react-redux";
// import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
// //import setCourses from "../Courses/reducer";
// import { enrollCourse, unenrollCourse } from "./reducer";

// export default function Dashboard() {

//     //const [courses, setCourses] = useState<any[]>(db.courses);

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const [course, setCourse] = useState<any>({
//         _id: "0", name: "New Course", number: "New Number",
//         startDate: "2023-09-10", endDate: "2023-12-15",
//         cardImg: "/images/reactjs.jpg", description: "New Description"
//     });

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const { courses } = useSelector((state: any) => state.coursesReducer);
//     const dispatch = useDispatch();

//     const [showAllCourses, setShowAllCourses] = useState(false);

//     const isEnrolled = (courseId: string) => {
//         return enrollments.some(
//             // eslint-disable-next-line @typescript-eslint/no-explicit-any
//             (enrollment: any) =>
//                 enrollment.user === currentUser?._id &&
//                 enrollment.course === courseId
//         );
//     };

//     const handleEnroll = (courseId: string) => {
//         if (currentUser) {
//             dispatch(enrollCourse({ userId: currentUser._id, courseId }));
//         }
//     };

//     const handleUnenroll = (courseId: string) => {
//         if (currentUser) {
//             dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
//         }
//     };

//     const onAddNewCourse = async () => {
//         const newCourse = await client.createCourse(course);
//         dispatch(setCourses([...courses, newCourse]));
//     };

//     const onDeleteCourse = async (courseId: string) => {
//         const status = await client.deleteCourse(courseId);
//         dispatch(setCourses(courses.filter((course: any) => course._id !== courseId)));
//     };

//     const onUpdateCourse = async () => {
//         await client.updateCourse(course);
//         dispatch(setCourses(courses.map((c) => {
//             if (c._id === course._id) { return course; }
//             else { return c; }
//         })));
//     };




//     const fetchCourses = async () => {
//         try {
//             const courses = await client.findMyCourses();
//             dispatch(setCourses(courses));
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     useEffect(() => {
//         fetchCourses();
//     }, [currentUser]);


//     return (
//         <div id="dashboard">
//             <h1>
//                 Kambaz Dashboard
//                 {currentUser && (
//                     <Button
//                         variant="primary"
//                         className="float-end"
//                         onClick={() => setShowAllCourses(!showAllCourses)}
//                     >
//                         Enrollments
//                     </Button>
//                 )}
//             </h1>
//             <hr />
//             <h3>
//                 Published Courses:
//             </h3>
//             <hr />
//             {currentUser?.role === "FACULTY" && (
//                 <>
//                     <h5>New Course:
//                         <button className="btn btn-primary float-end"
//                             id="wd-add-new-course-click"
//                             onClick={onAddNewCourse} > Add </button>
//                         <button className="btn btn-warning float-end me-2"
//                             onClick={onUpdateCourse} id="wd-update-course-click">
//                             Update </button>
//                     </h5>
//                     <br />
//                     <FormControl value={course.name} className="mb-2"
//                         onChange={(e) => setCourse({ ...course, name: e.target.value })} />
//                     <FormControl value={course.description}
//                         onChange={(e) => setCourse({ ...course, description: e.target.value })} />
//                     <hr />
//                 </>
//             )}

//             <hr />
//             <div id="dashboard-course-list">


//                 <Row xs={1} md={5} className="g-4">
//                     {courses
//                         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//                         .map((course: any) => (
//                             <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
//                                 <Card>
//                                     <Link href={`/Courses/${course._id}/Home`}
//                                         className="wd-dashboard-course-link text-decoration-none text-dark" >
//                                         <CardImg src={(course.cardImg)} variant="top" width="100%" height={160} />
//                                         <CardBody className="card-body">
//                                             <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                                                 {course.name} </CardTitle>
//                                             <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                                                 {course.description} </CardText>
//                                             <Button variant="primary"> Go </Button>

//                                             {currentUser && showAllCourses && (
//                                                 <>
//                                                     {isEnrolled(course._id) ? (
//                                                         <button
//                                                             onClick={(event) => {
//                                                                 event.preventDefault();
//                                                                 handleUnenroll(course._id);
//                                                             }}
//                                                             className="btn btn-danger float-end"
//                                                         >
//                                                             Unenroll
//                                                         </button>
//                                                     ) : (
//                                                         <button
//                                                             onClick={(event) => {
//                                                                 event.preventDefault();
//                                                                 handleEnroll(course._id);
//                                                             }}
//                                                             className="btn btn-success float-end"
//                                                         >
//                                                             Enroll
//                                                         </button>
//                                                     )}
//                                                 </>
//                                             )}

//                                             {currentUser?.role === "FACULTY" && (
//                                                 <>
//                                                     <button onClick={(event) => {
//                                                         event.preventDefault();
//                                                         onDeleteCourse(course._id);
//                                                     }} className="btn btn-danger float-end"
//                                                         id="wd-delete-course-click">
//                                                         Delete
//                                                     </button>
//                                                     <button id="wd-edit-course-click"
//                                                         onClick={(event) => {
//                                                             event.preventDefault();
//                                                             setCourse(course);
//                                                         }}
//                                                         className="btn btn-warning me-2 float-end" >
//                                                         Edit
//                                                     </button>
//                                                 </>
//                                             )}

//                                         </CardBody>
//                                     </Link>
//                                 </Card>
//                             </Col>
//                         ))}
//                 </Row>

//             </div>
//         </div>
//     )
// }



"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import * as coursesClient from "../Courses/client";
import * as enrollmentsClient from "./client";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
import { setEnrollments } from "./reducer";

export default function Dashboard() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const dispatch = useDispatch();

    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        cardImg: "/images/reactjs.jpg",
        description: "New Description",
    });

    const [showAllCourses, setShowAllCourses] = useState(false);

    const isEnrolled = (courseId: string) => {
        return enrollments.some(
            (enrollment: any) =>
                enrollment.user === currentUser?._id && enrollment.course === courseId
        );
    };

    //   const handleEnroll = async (courseId: string) => {
    //     if (currentUser) {
    //       await enrollmentsClient.enrollInCourse(currentUser._id, courseId);
    //       const newEnrollment = {
    //         _id: new Date().getTime().toString(),
    //         user: currentUser._id,
    //         course: courseId,
    //       };
    //       dispatch(setEnrollments([...enrollments, newEnrollment]));
    //     }
    //   };

    //   const handleUnenroll = async (courseId: string) => {
    //     if (currentUser) {
    //       await enrollmentsClient.unenrollFromCourse(currentUser._id, courseId);
    //       dispatch(
    //         setEnrollments(
    //           enrollments.filter(
    //             (enrollment: any) =>
    //               !(enrollment.user === currentUser._id && enrollment.course === courseId)
    //           )
    //         )
    //       );
    //     }
    //   };

    const handleEnroll = async (courseId: string) => {
        if (currentUser) {
            const newEnrollment = await enrollmentsClient.enrollInCourse(currentUser._id, courseId);
            dispatch(setEnrollments([...enrollments, newEnrollment]));
        }
    };

    const handleUnenroll = async (courseId: string) => {
        if (currentUser) {
            await enrollmentsClient.unenrollFromCourse(currentUser._id, courseId);
            dispatch(
                setEnrollments(
                    enrollments.filter(
                        (enrollment: any) =>
                            !(enrollment.user === currentUser._id && enrollment.course === courseId)
                    )
                )
            );
        }
    };

    const onAddNewCourse = async () => {
        const newCourse = await coursesClient.createCourse(course);
        dispatch(setCourses([...courses, newCourse]));
    };

    const onDeleteCourse = async (courseId: string) => {
        await coursesClient.deleteCourse(courseId);
        dispatch(setCourses(courses.filter((course: any) => course._id !== courseId)));
    };

    const onUpdateCourse = async () => {
        await coursesClient.updateCourse(course);
        dispatch(
            setCourses(
                courses.map((c) => {
                    if (c._id === course._id) {
                        return course;
                    } else {
                        return c;
                    }
                })
            )
        );
    };

    const fetchCourses = async () => {
        // try {
        //     const courses = await coursesClient.findMyCourses();
        //     dispatch(setCourses(courses));
        // } catch (error) {
        //     console.error(error);
        // }
        try {
            let courses;
            if (showAllCourses) {
                // Fetch ALL courses when in enrollment mode
                courses = await coursesClient.findAllCourses();
            } else {
                // Fetch only enrolled courses for default view
                courses = await coursesClient.findMyCourses();
            }
            dispatch(setCourses(courses));
        } catch (error) {
            console.error(error);
        }
    };

    const fetchEnrollments = async () => {
        if (!currentUser) return;
        try {
            const enrollments = await enrollmentsClient.findEnrollmentsForUser(
                currentUser._id
            );
            dispatch(setEnrollments(enrollments));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, [currentUser, showAllCourses]);

    useEffect(() => {
        fetchEnrollments();
    }, [currentUser]);

    return (
        <div id="dashboard">
            <h1>
                Kambaz Dashboard
                {currentUser && (
                    <Button
                        variant="primary"
                        className="float-end"
                        onClick={() => setShowAllCourses(!showAllCourses)}
                    >
                        Enrollments
                    </Button>
                )}
            </h1>
            <hr />
            <h3>Published Courses:</h3>
            <hr />
            {currentUser?.role === "FACULTY" && (
                <>
                    <h5>
                        New Course:
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={onAddNewCourse}
                        >
                            Add
                        </button>
                        <button
                            className="btn btn-warning float-end me-2"
                            onClick={onUpdateCourse}
                            id="wd-update-course-click"
                        >
                            Update
                        </button>
                    </h5>
                    <br />
                    <FormControl
                        value={course.name}
                        className="mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <FormControl
                        value={course.description}
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                    <hr />
                </>
            )}

            <hr />
            <div id="dashboard-course-list">
                <Row xs={1} md={5} className="g-4">
                    {courses.map((course: any) => (
                        <Col
                            key={course._id}
                            className="wd-dashboard-course"
                            style={{ width: "300px" }}
                        >
                            <Card>
                                <Link
                                    href={`/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <CardImg
                                        src={course.cardImg}
                                        variant="top"
                                        width="100%"
                                        height={160}
                                    />
                                    <CardBody className="card-body">
                                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name}
                                        </CardTitle>
                                        <CardText
                                            className="wd-dashboard-course-description overflow-hidden"
                                            style={{ height: "100px" }}
                                        >
                                            {course.description}
                                        </CardText>
                                        <Button variant="primary">Go</Button>

                                        {currentUser && showAllCourses && (
                                            <>
                                                {isEnrolled(course._id) ? (
                                                    <button
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            handleUnenroll(course._id);
                                                        }}
                                                        className="btn btn-danger float-end"
                                                    >
                                                        Unenroll
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            handleEnroll(course._id);
                                                        }}
                                                        className="btn btn-success float-end"
                                                    >
                                                        Enroll
                                                    </button>
                                                )}
                                            </>
                                        )}

                                        {currentUser?.role === "FACULTY" && (
                                            <>
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        onDeleteCourse(course._id);
                                                    }}
                                                    className="btn btn-danger float-end"
                                                    id="wd-delete-course-click"
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end"
                                                >
                                                    Edit
                                                </button>
                                            </>
                                        )}
                                    </CardBody>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}