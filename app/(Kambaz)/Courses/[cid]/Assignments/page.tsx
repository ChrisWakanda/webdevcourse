
"use client"
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import Link from "next/link";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { RiArrowDropDownFill } from "react-icons/ri";
import AssignmentsControl from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentItemControlButtons from "./AssignmentItemControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments">
      <AssignmentsControl />
      <br />

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-1" />
            <RiArrowDropDownFill className="fs-1" />
            Assignments
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .filter((assignment: any) => assignment.course === cid)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .map((assignment: any) => (
                <ListGroupItem key={assignment._id} className="wd-lesson p-3 ps-1">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <BsGripVertical className="me-2 fs-1" />
                      <BiEdit className="fs-3 me-2 text-success" />
                    </Col>
                    <Col>
                      <Row xs="auto">
                        <div className="text-start">
                          <Link
                            href={`/Courses/${cid}/Assignments/${assignment._id}`}
                            className="wd-assignment-link"
                          >
                            <h5>{assignment.title}</h5>
                          </Link>
                        </div>
                      </Row>
                      <Row xs="auto">
                        <div className="text-start">
                          <h6>
                            Multiple Modules | <b>Not available</b> until {assignment.availableDate} at 12:00am
                          </h6>
                        </div>
                      </Row>
                      <Row xs="auto">
                        <div className="text-start">
                          <h6>
                            <b>Due:</b> {assignment.dueDate} at 11:59pm | {assignment.points}pts
                          </h6>
                        </div>
                      </Row>
                    </Col>
                    <Col>
                      <AssignmentItemControlButtons />
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}