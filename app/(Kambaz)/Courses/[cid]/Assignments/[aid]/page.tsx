import { Button, Col, Form, FormControl, FormLabel, FormSelect, FormText, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <Row>
                <Col xs={1}>

                </Col>
                <Col>
                    <FormLabel>Assignment Name:</FormLabel>
                    <FormControl defaultValue="A1"></FormControl>
                    <br />
                    <FormControl as="textarea" style={{ height: "200px" }} defaultValue="The assignment is available online. For this HTML assignment, I set up the environment and created basic web pages using HTML. I practiced adding headings, paragraphs, links, and lists to structure content properly. Setting up the environment allowed me to test my code in a browser and see how different HTML tags work, giving me a solid foundation for future web development."></FormControl>
                    <br />
                    <Row>
                        <FormLabel column sm={3}>Points:</FormLabel>
                        <Col sm={9}>
                            <FormControl defaultValue="100"></FormControl>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <FormLabel column sm={3}>Assignment Group:</FormLabel>
                        <Col sm={9}>
                            <FormSelect>
                                <option value="0" defaultChecked>Assignments</option>
                                <option value="1">etc</option>
                            </FormSelect>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <FormLabel column sm={3}>Display Grade:</FormLabel>
                        <Col sm={9}>
                            <FormSelect>
                                <option value="0" defaultChecked>Percentage</option>
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
                                    <option value="0" defaultChecked>Online</option>
                                    <option value="1">Offline</option>
                                </FormSelect>
                                <br />
                                <strong>Online Entry Options:</strong>
                                <br />
                                <div className="mt-2">
                                    <Form.Check type="checkbox" id="text-entry" label="Text Entry" /><br />
                                    <Form.Check
                                        type="checkbox"
                                        id="website-url"
                                        label="Website URL"
                                        defaultChecked
                                    /><br />
                                    <Form.Check
                                        type="checkbox"
                                        id="media-recordings"
                                        label="Media Recordings"
                                    /><br />
                                    <Form.Check
                                        type="checkbox"
                                        id="student-annotation"
                                        label="Student Annotation"
                                    /><br />
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
                                        defaultValue="2024-05-14"
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
                                                defaultValue="2024-05-06"
                                            />
                                            <InputGroupText>
                                                <FaCalendarAlt />
                                            </InputGroupText>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <strong>Until</strong>
                                        <InputGroup>
                                            <FormControl type="date" />
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
                            <Button variant="secondary" size="lg" className="me-1" id="wd-add-module-btn">
                            Cancel
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="danger" size="lg" className="me-1" id="wd-add-module-btn">
                            Save
                            </Button>
                        </Col>
                    </Row>
                    
                </Col>
                <Col xs={1}>

                </Col>
            </Row>
        </div>
    );
}
