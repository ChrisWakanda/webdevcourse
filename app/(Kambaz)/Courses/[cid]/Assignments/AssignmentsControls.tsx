import { Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormControl, InputGroup, Row } from "react-bootstrap";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
export default function AssignmentsControl() {
    return (
        <div>

            <Row>
                <Col xs={7}>
                    <InputGroup className="mb-3">
                        <InputGroupText>
                            <FaMagnifyingGlass />
                        </InputGroupText>
                        <FormControl placeholder="Search...">
                        </FormControl>
                    </InputGroup>
                </Col>
                <Col>
                    <Button variant="secondary" size="sm" className="me-1 justify-right" id="wd-add-module-btn">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Group
                    </Button>
                    <Button variant="danger" size="sm" className="me-1 justify-right" id="wd-add-module-btn">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Assignment
                    </Button>
                </Col>
            </Row>
        </div>
    )
}