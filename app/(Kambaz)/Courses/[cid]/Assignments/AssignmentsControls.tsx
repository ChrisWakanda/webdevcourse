// import { Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormControl, InputGroup, Row } from "react-bootstrap";
// import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
// import InputGroupText from "react-bootstrap/esm/InputGroupText";
// export default function AssignmentsControl() {
//     return (
//         <div className="d-flex justify-content-between">

//                     <InputGroup className="me-3" style={{
//                     }}>
//                         <InputGroupText>
//                             <FaMagnifyingGlass />
//                         </InputGroupText>
//                         <FormControl placeholder="Search...">
//                         </FormControl>
//                     </InputGroup>
//                 <div className="d-flex flex-row">
//                     <Button style={{minWidth: 120}} variant="secondary" size="sm" className="me-1" id="wd-add-module-btn">
//                         <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//                         Group
//                     </Button>
//                     <Button style={{minWidth: 120}} variant="danger" size="sm" className="me-1" id="wd-add-module-btn">
//                         <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//                         Assignment
//                     </Button>
//                 </div>
//         </div>
//     )
// }

"use client"
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { useParams, useRouter } from "next/navigation";


export default function AssignmentsControl() {
    const { cid } = useParams();
    const router = useRouter();

    return (
        <div className="d-flex justify-content-between">
            <InputGroup className="me-3">
                <InputGroupText>
                    <FaMagnifyingGlass />
                </InputGroupText>
                <FormControl placeholder="Search...">
                </FormControl>
            </InputGroup>
            <div className="d-flex flex-row">
                <Button style={{minWidth: 120}} variant="secondary" size="sm" className="me-1" id="wd-add-module-btn">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </Button>
                <Button 
                    style={{minWidth: 120}} 
                    variant="danger" 
                    size="sm" 
                    className="me-1" 
                    id="wd-add-module-btn"
                    onClick={() => router.push(`/Courses/${cid}/Assignments/New`)}
                >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Button>
            </div>
        </div>
    )
}