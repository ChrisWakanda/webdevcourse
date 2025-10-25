// export default function New() {
//   return (
//     <div id="wd-assignments-editor">
//       <label htmlFor="wd-name"><b>Assignment Name:</b></label>
//       <br/><br/>
//       <input id="wd-name" /><br /><br />
//       <textarea id="wd-description" cols={60} rows={7} ></textarea>
//       <br />
//       <table>
//         <tbody>
            
//             <tr>
//                 <td align="right" valign="top">
//                     <label htmlFor="wd-points">Points:</label>
//                 </td>
//                 <td>
//                     <input id="wd-points"  />
//                 </td>
//             </tr>
            
//             <tr>
//                 <td align="right" valign="top">
//                         <label htmlFor="wd-group">Assignment Group:</label>
//                 </td>
//                 <td>
//                     <select id="wd-group">
//                         <option>
//                             Assignments
//                         </option>
//                         <option>
//                             etc
//                         </option>
//                     </select>
//                 </td>
//             </tr>
            
//             <tr>
//                 <td align="right" valign="top">
//                     <label htmlFor="wd-display-grade-as">Display Grade as:</label>
//                 </td>
//                 <td>
//                     <select id="wd-display-grade-as">
//                     <option>
//                         Percentage
//                     </option>
//                     <option>
//                         Letter Grade
//                     </option>
//                     </select>
//                 </td>
//             </tr>
            
//             <tr>
//                 <td align="right" valign="top">
//                     <label htmlFor="wd-submission-type">Submission Type:</label>
//                 </td>
//                 <td>
//                     <select id="wd-submission-type">
//                     <option>
//                         Online
//                     </option>
//                     <option>
//                         In-Person (Offline)
//                     </option>
//                     </select>
//                 </td>
//             </tr>
            
//             <tr>
//                 <td align="right" valign="top" >
//                     <label>Online Entry Options:</label>
//                 </td>
//                 <td>
//                     <input type="checkbox" name="entry-options" id="text-entry"/>
//                     <label htmlFor="text-entry">Text Entry</label><br/>
//                     <input type="checkbox" name="entry-options" id="website-url-entry"/>
//                     <label htmlFor="website-url-entry">Website URL</label><br/>
//                      <input type="checkbox" name="entry-options" id="media-recordings-entry"/>
//                     <label htmlFor="media-recordings-entry">Media Recordings</label><br/>
//                     <input type="checkbox" name="entry-options" id="student-annotations-entry"/>
//                     <label htmlFor="student-annotations-entry">Student Annotations</label><br/>
//                     <input type="checkbox" name="entry-options" id="file-upload-entry"/>
//                     <label htmlFor="file-upload-entry">File Uploads</label><br/>
//                 </td>
//             </tr>
//             <tr>
//                 <td align="right" valign="top" >
//                     <label htmlFor="wd-assign-to">Assign to:</label>
//                 </td>
//                 <td>
//                     <input id="wd-assign-to"  />
//                 </td>
//             </tr>
//             <tr>
//                 <td align="right" valign="top" >
//                     <label htmlFor="wd-due">Due:</label>
//                 </td>
//                 <td>
//                     <input type="date" id="wd-due" />
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                     <label htmlFor="wd-available-from">Available From:</label><br/>
//                     <input type="date" id="wd-available-from" />
//                 </td>
//                 <td>
//                     <label htmlFor="wd-available-until">Available Until:</label><br/>
//                     <input type="date" id="wd-available-until" />
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                     <hr/>
//                     <button>Cancel</button>
//                 </td>
//                 <td>
//                     <hr/>
//                     <button>Save</button>
//                 </td>
//             </tr>
//         </tbody>
//       </table>

//     </div>
// );}

"use client"
import { useParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addAssignment } from "../reducer";
import { useState } from "react";
import { Button, Col, Form, FormControl, FormLabel, FormSelect, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaCalendarAlt } from "react-icons/fa";

export default function New() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
    course: cid as string,
  });

  const handleSave = () => {
    dispatch(addAssignment(formData));
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

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
                  <Form.Check type="checkbox" id="website-url" label="Website URL" /><br />
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
