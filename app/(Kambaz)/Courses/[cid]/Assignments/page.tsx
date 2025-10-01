import Link from "next/link";
import { Button, Col, Dropdown, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import AssignmentsControl from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { DiComposer, DiDropbox } from "react-icons/di";
import { RiArrowDropDownFill, RiDropdownList } from "react-icons/ri";
import { BiEdit, BiEditAlt, BiNote, BiNotepad } from "react-icons/bi";
import AssignmentItemControlButtons from "./AssignmentItemControlButtons";
export default function Assignments() {
  return (
    <div id="wd-assignments">
     <AssignmentsControl/>
     <br/>

    <ListGroup className="rounded-0" id="wd-modules">
      <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-1" />
            <RiArrowDropDownFill className="fs-1"/>
            Assignments
            <AssignmentControlButtons/>
        </div>
        <ListGroup className="wd-lessons rounded-0">
          <ListGroupItem className="wd-lesson p-3 ps-1">
            <Row className="align-items-center">
              <Col xs="auto">
                <BsGripVertical className="me-2 fs-1" />
                <BiEdit className="fs-3 me-2 text-success"/>
              </Col>
              <Col>
                <Row xs="auto">
                  <div className="text-start">
                    <Link href="/Courses/1234/Assignments/123"
                    className="wd-assignment-link" >
                      <h5>
                        A1
                      </h5>
                    </Link>
                  </div>
                </Row>
                <Row xs="auto">
                  <div className="text-start">
                    <h6>
                      Multiple Modules | <b>Not available</b> until January 12 at 12:00am
                    </h6>
                  </div>
                </Row>
                <Row xs="auto">
                  <div className="text-start">
                    <h6>
                      <b>Due:</b> January 20 at 11:59pm | 100pts
                    </h6>
                  </div>
                </Row>
              </Col>
              <Col>
                <AssignmentItemControlButtons/>
              </Col>
            </Row>
          </ListGroupItem>

          <ListGroupItem className="wd-lesson p-3 ps-1">
            <Row className="align-items-center">
              <Col xs="auto">
                <BsGripVertical className="me-2 fs-1" />
                <BiEdit className="fs-3 me-2 text-success"/>
              </Col>
              <Col>
                <Row xs="auto">
                  <div className="text-start">
                    <Link href="/Courses/1234/Assignments/123"
                    className="wd-assignment-link" >
                      <h5>
                        A2
                      </h5>
                    </Link>
                  </div>
                </Row>
                <Row xs="auto">
                  <div className="text-start">
                    <h6>
                      Multiple Modules | <b>Not available</b> until January 20 at 12:00am
                    </h6>
                  </div>
                </Row>
                <Row xs="auto">
                  <div className="text-start">
                    <h6>
                      <b>Due:</b> January 27 at 11:59pm | 100pts
                    </h6>
                  </div>
                </Row>
              </Col>
              <Col>
                <AssignmentItemControlButtons/>
              </Col>
            </Row>
          </ListGroupItem>

          <ListGroupItem className="wd-lesson p-3 ps-1">
            <Row className="align-items-center">
              <Col xs="auto">
                <BsGripVertical className="me-2 fs-1" />
                <BiEdit className="fs-3 me-2 text-success"/>
              </Col>
              <Col>
                <Row xs="auto">
                  <div className="text-start">
                    <Link href="/Courses/1234/Assignments/123"
                    className="wd-assignment-link" >
                      <h5>
                        A3
                      </h5>
                    </Link>
                  </div>
                </Row>
                <Row xs="auto">
                  <div className="text-start">
                    <h6>
                      Multiple Modules | <b>Not available</b> until January 27 at 12:00am
                    </h6>
                  </div>
                </Row>
                <Row xs="auto">
                  <div className="text-start">
                    <h6>
                      <b>Due:</b> February 4 at 11:59pm | 100pts
                    </h6>
                  </div>
                </Row>
              </Col>
              <Col>
                <AssignmentItemControlButtons/>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </ListGroupItem>
    </ListGroup>
  </div>
);}
