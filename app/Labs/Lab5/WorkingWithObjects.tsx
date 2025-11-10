import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module",
        description: "Module for creating a NodeJS server with ExpressJS",
        course: "Full Stack Development"
    });
    const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <h5>Assigment:</h5>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title </a>
            <FormControl className="w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <br/>
            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score </a>
            <FormControl className="w-75" id="wd-assignment-score"
                defaultValue={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: Number(e.target.value) })} />

            <br/>
             
            <Form.Check label="Status: Check - completed. Uncheck - not completed" type="checkbox" id="basic-checkbox" onChange={(e) => setAssignment({ ...assignment, completed: !assignment.completed })} />
            <a id="wd-update-assignment-completed"
                className="btn btn-primary"
                href={`${ASSIGNMENT_API_URL}/status/${assignment.completed}`}>
                Update Completed Status </a>
            <br/><br/>
            <h5>Module:</h5>
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Name </a>
            <FormControl className="w-75" id="wd-module-name"
                defaultValue={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
            <br/>

            <a id="wd-update-module-desc"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Description </a>
            <FormControl className="w-50" id="wd-module-desc"
                defaultValue={module.description} onChange={(e) =>
                    setModule({ ...module, description: e.target.value })} />

            <h4>Retrieving Objects:</h4>
            <h5>Assigment:</h5>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/assignment`}>
                Get Assignment
            </a>
            <h5>Module:</h5>
            <a id="wd-retrieve-module" className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/module`}>
                Get Module
            </a>
            <h4>Retrieving Properties:</h4>
            <h5>Assigment:</h5>
            <a id="wd-retrieve-assignments-title" className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/assignment/title`}>
                Get Title
            </a>
            <br/><br/>
            <a id="wd-retrieve-assignments-score" className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/assignment/score`}>
                Get Score
            </a>
            <br/><br/>
            <a id="wd-retrieve-assignments-status" className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/assignment/status`}>
                Get Status (completed?)
            </a>
            <h5>Module:</h5>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/module/name`}>
                Get Name
            </a><br/><br/>
            <a id="wd-retrieve-module-desc" className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/module/description`}>
                Get Description
            </a>
            <hr />
        </div>
    );
}
