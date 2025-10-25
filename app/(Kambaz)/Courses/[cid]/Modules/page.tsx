"use client"
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModuleControls";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { addModule, editModule, updateModule, deleteModule }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
    const { cid } = useParams();
    // const modules = db.modules;
    //const [modules, setModules] = useState<any[]>(db.modules);
    const [moduleName, setModuleName] = useState("");
    // const addModule = () => {
    //     setModules([...modules, { _id: uuidv4(), name: moduleName, course: cid, lessons: [] }]);
    //     setModuleName("");
    // };
    // const deleteModule = (moduleId: string) => {
    //     setModules(modules.filter((m) => m._id !== moduleId));
    // };
    // const editModule = (moduleId: string) => {
    //     setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
    // };
    // const updateModule = (module: any) => {
    //     setModules(modules.map((m) => (m._id === module._id ? module : m)));
    // };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();


    return (
        <>

            <ListGroup id="wd-modules" className="rounded-0">
                <ModulesControls setModuleName={setModuleName} moduleName={moduleName}
                    addModule={() => {
                        dispatch(addModule({ name: moduleName, course: cid }));
                        setModuleName("");
                    }
                    } /><br />
                {modules
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .filter((module: any) => module.course === cid)
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .map((module: any) => (
                        <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {!module.editing && module.name}
                                {module.editing && (
                                    <FormControl className="w-50 d-inline-block"
                                        onChange={(e) =>
                                            dispatch(
                                                updateModule({ ...module, name: e.target.value })
                                            )
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                dispatch(updateModule({ ...module, editing: false }));
                                            }
                                        }}
                                        defaultValue={module.name} />
                                )}
                                <ModuleControlButtons moduleId={module._id}
                                    deleteModule={(moduleId) => {
                                        dispatch(deleteModule(moduleId));
                                    }
                                    } editModule={(moduleId) => dispatch(editModule(moduleId))} />
                            </div>
                            {module.lessons && (
                                <ListGroup className="wd-lessons rounded-0">
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {module.lessons.map((lesson: any) => (
                                        <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" />

                                            {lesson.name} <LessonControlButtons />
                                        </ListGroupItem>
                                    ))}</ListGroup>)}</ListGroupItem>))}</ListGroup>
        </>
    );
}