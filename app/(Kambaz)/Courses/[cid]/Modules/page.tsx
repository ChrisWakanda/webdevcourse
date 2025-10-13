"use client"
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModuleControls";
export default function Modules() {
    const { cid } = useParams();
    const modules = db.modules;
    return (
        <>
        
        <ListGroup id="wd-modules" className="rounded-0">
            <ModulesControls/><br/>
            {modules
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .filter((module: any) => module.course === cid)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((module: any) => (
                    <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
                        </div> 
                        {module.lessons && (
                            <ListGroup className="wd-lessons rounded-0">
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {module.lessons.map((lesson: any) => (
                                    <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                                    </ListGroupItem>
                                ))}</ListGroup>)}</ListGroupItem>))}</ListGroup>
        </>
        );
}