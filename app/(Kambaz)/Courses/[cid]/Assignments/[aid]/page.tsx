// "use client"
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import * as db from "../../../../Database";
// import { Button, Col, Form, FormControl, FormLabel, FormSelect, InputGroup, Row } from "react-bootstrap";
// import InputGroupText from "react-bootstrap/esm/InputGroupText";
// import { FaCalendarAlt } from "react-icons/fa";

// export default function AssignmentEditor() {
//     const { cid, aid } = useParams();
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const assignment = db.assignments.find((a: unknown) => (a as any)._id === aid);

//     if (!assignment) {
//         return <div>Assignment not found</div>;
//     }

//     return (
//         <div id="wd-assignments-editor">
//             <Row>
//                 <Col xs={1}></Col>
//                 <Col>
//                     <FormLabel>Assignment Name:</FormLabel>
//                     <FormControl defaultValue={assignment.title}></FormControl>
//                     <br />
//                     <FormControl
//                         as="textarea"
//                         style={{ height: "200px" }}
//                         defaultValue={assignment.description}
//                     ></FormControl>
//                     <br />
//                     <Row>
//                         <FormLabel column sm={3}>Points:</FormLabel>
//                         <Col sm={9}>
//                             <FormControl defaultValue={assignment.points}></FormControl>
//                         </Col>
//                     </Row>
//                     <br />
//                     <Row>
//                         <FormLabel column sm={3}>Assignment Group:</FormLabel>
//                         <Col sm={9}>
//                             <FormSelect>
//                                 <option value="0" defaultChecked>Assignments</option>
//                                 <option value="1">etc</option>
//                             </FormSelect>
//                         </Col>
//                     </Row>
//                     <br />
//                     <Row>
//                         <FormLabel column sm={3}>Display Grade:</FormLabel>
//                         <Col sm={9}>
//                             <FormSelect>
//                                 <option value="0" defaultChecked>Percentage</option>
//                                 <option value="1">Letter Grade</option>
//                             </FormSelect>
//                         </Col>
//                     </Row>
//                     <br />
//                     <Row>
//                         <FormLabel column sm={3}>Submission type:</FormLabel>
//                         <Col sm={9}>
//                             <div className="border rounded p-3 mt-3">
//                                 <FormSelect>
//                                     <option value="0" defaultChecked>Online</option>
//                                     <option value="1">Offline</option>
//                                 </FormSelect>
//                                 <br />
//                                 <strong>Online Entry Options:</strong>
//                                 <br />
//                                 <div className="mt-2">
//                                     <Form.Check type="checkbox" id="text-entry" label="Text Entry" /><br />
//                                     <Form.Check
//                                         type="checkbox"
//                                         id="website-url"
//                                         label="Website URL"
//                                         defaultChecked
//                                     /><br />
//                                     <Form.Check
//                                         type="checkbox"
//                                         id="media-recordings"
//                                         label="Media Recordings"
//                                     /><br />
//                                     <Form.Check
//                                         type="checkbox"
//                                         id="student-annotation"
//                                         label="Student Annotation"
//                                     /><br />
//                                     <Form.Check type="checkbox" id="file-uploads" label="File Uploads" />
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                     <br />
//                     <Row>
//                         <FormLabel column sm={3}>Assign To:</FormLabel>
//                         <Col sm={9}>
//                             <div className="border rounded p-3">
//                                 <strong>Assign To:</strong><br /><br />
//                                 <FormControl defaultValue="Everyone" className="mb-3" />
//                                 <br />
//                                 <strong>Due:</strong>
//                                 <br />
//                                 <InputGroup className="mb-3">
//                                     <FormControl
//                                         type="date"
//                                         defaultValue={assignment.dueDate}
//                                     />
//                                     <InputGroupText>
//                                         <FaCalendarAlt />
//                                     </InputGroupText>
//                                 </InputGroup>
//                                 <Row>
//                                     <Col>
//                                         <strong>Available from</strong>
//                                         <InputGroup>
//                                             <FormControl
//                                                 type="date"
//                                                 defaultValue={assignment.availableDate}
//                                             />
//                                             <InputGroupText>
//                                                 <FaCalendarAlt />
//                                             </InputGroupText>
//                                         </InputGroup>
//                                     </Col>
//                                     <Col>
//                                         <strong>Until</strong>
//                                         <InputGroup>
//                                             <FormControl type="date" />
//                                             <InputGroupText>
//                                                 <FaCalendarAlt />
//                                             </InputGroupText>
//                                         </InputGroup>
//                                     </Col>
//                                 </Row>
//                             </div>
//                         </Col>
//                     </Row>
//                     <hr />
//                     <Row className="float-end">
//                         <Col>
//                             <Link href={`/Courses/${cid}/Assignments`}>
//                                 <Button variant="secondary" size="lg" className="me-1">
//                                     Cancel
//                                 </Button>
//                             </Link>
//                         </Col>
//                         <Col>
//                             <Link href={`/Courses/${cid}/Assignments`}>
//                                 <Button variant="danger" size="lg" className="me-1">
//                                     Save
//                                 </Button>
//                             </Link>
//                         </Col>
//                     </Row>
//                 </Col>
//                 <Col xs={1}></Col>
//             </Row>
//         </div>
//     );
// }

"use client"
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment } from "../reducer";
import { useState, useEffect } from "react";
import { Button, Col, Form, FormControl, FormLabel, FormSelect, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const assignment = assignments.find((a: any) => a._id === aid);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
    course: cid as string,
  });

  useEffect(() => {
    if (assignment) {
      setFormData({
        title: assignment.title || "",
        description: assignment.description || "",
        points: assignment.points || 100,
        dueDate: assignment.dueDate || "",
        availableFromDate: assignment.availableFromDate || "",
        availableUntilDate: assignment.availableUntilDate || "",
        course: cid as string,
      });
    }
  }, [assignment, cid]);

  const handleSave = () => {
    dispatch(updateAssignment({ ...formData, _id: aid }));
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <Row>
        <Col xs={1}></Col>
        <Col>
          <FormLabel>Assignment Name:</FormLabel>
          <FormControl 
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <br />
          <FormControl
            as="textarea"
            style={{ height: "200px" }}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <br />
          <Row>
            <FormLabel column sm={3}>Points:</FormLabel>
            <Col sm={9}>
              <FormControl 
                type="number"
                value={formData.points}
                onChange={(e) => setFormData({ ...formData, points: Number(e.target.value) })}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <FormLabel column sm={3}>Assignment Group:</FormLabel>
            <Col sm={9}>
              <FormSelect>
                <option value="0">Assignments</option>
                <option value="1">etc</option>
              </FormSelect>
            </Col>
          </Row>
          <br />
          <Row>
            <FormLabel column sm={3}>Display Grade:</FormLabel>
            <Col sm={9}>
              <FormSelect>
                <option value="0">Percentage</option>
                <option value="1">Letter Grade</option>
              </FormSelect>
            </Col>
          </Row>
          <br />
          <Row>
            <FormLabel column sm={3}>Submission type:</FormLabel>
            <Col sm={9}>
              <div className="border rounded p-3 mt-3">
                <FormSelect>
                  <option value="0">Online</option>
                  <option value="1">Offline</option>
                </FormSelect>
                <br />
                <strong>Online Entry Options:</strong>
                <br />
                <div className="mt-2">
                  <Form.Check type="checkbox" id="text-entry" label="Text Entry" /><br />
                  <Form.Check type="checkbox" id="website-url" label="Website URL" defaultChecked /><br />
                  <Form.Check type="checkbox" id="media-recordings" label="Media Recordings" /><br />
                  <Form.Check type="checkbox" id="student-annotation" label="Student Annotation" /><br />
                  <Form.Check type="checkbox" id="file-uploads" label="File Uploads" />
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <FormLabel column sm={3}>Assign To:</FormLabel>
            <Col sm={9}>
              <div className="border rounded p-3">
                <strong>Assign To:</strong><br /><br />
                <FormControl defaultValue="Everyone" className="mb-3" />
                <br />
                <strong>Due:</strong>
                <br />
                <InputGroup className="mb-3">
                  <FormControl
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  />
                  <InputGroupText>
                    <FaCalendarAlt />
                  </InputGroupText>
                </InputGroup>
                <Row>
                  <Col>
                    <strong>Available from</strong>
                    <InputGroup>
                      <FormControl
                        type="date"
                        value={formData.availableFromDate}
                        onChange={(e) => setFormData({ ...formData, availableFromDate: e.target.value })}
                      />
                      <InputGroupText>
                        <FaCalendarAlt />
                      </InputGroupText>
                    </InputGroup>
                  </Col>
                  <Col>
                    <strong>Until</strong>
                    <InputGroup>
                      <FormControl 
                        type="date"
                        value={formData.availableUntilDate}
                        onChange={(e) => setFormData({ ...formData, availableUntilDate: e.target.value })}
                      />
                      <InputGroupText>
                        <FaCalendarAlt />
                      </InputGroupText>
                    </InputGroup>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="float-end">
            <Col>
              <Button variant="secondary" size="lg" className="me-1" onClick={handleCancel}>
                Cancel
              </Button>
            </Col>
            <Col>
              <Button variant="danger" size="lg" className="me-1" onClick={handleSave}>
                Save
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </div>
  );
}