
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModuleControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    return (
        <ListGroup className="rounded-0" id="wd-modules">
            {/* WEEK 1 */}
            <ModulesControls/><br/>
            <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-1" />
                    Week 1
                    <ModuleControlButtons/>
                </div>
                <ListGroup className="wd-lessons rounded-0">

                    <ListGroupItem className="wd-lesson p-3 ps-1 fw-bold">LESSON 1 - Course Introduction, Syllabus and Agenda</ListGroupItem>

                    {/* Learning Objectives */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />
                    </ListGroupItem>

                    {/* Reading */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 1 - Introduction <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 2 - Creating User Interfaces with HTML <LessonControlButtons />
                    </ListGroupItem>

                    {/* Slides */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Introduction to Web Development <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Introduction to HTML <LessonControlButtons />
                    </ListGroupItem>

                    <ListGroupItem className="wd-lesson p-3 ps-1 fw-bold">LESSON 2 - Formatting User Interfaces with HTML</ListGroupItem>

                    {/* Learning Objectives */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Understand the role of HTML in structuring web pages <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Learn common HTML tags for text, images, and links <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Explore lists, tables, and forms for user interaction <LessonControlButtons />
                    </ListGroupItem>

                    {/* Reading */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 3 - Formatting User Interfaces with HTML <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 4 - HTML Forms and Inputs <LessonControlButtons />
                    </ListGroupItem>

                    {/* Slides */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Introduction to HTML Elements <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Images, Lists, and Tables <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Creating Forms and Input Controls <LessonControlButtons />
                    </ListGroupItem>

                </ListGroup>
            </ListGroupItem>

            {/* WEEK 2 */}
            <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-1" />
                    Week 2
                    <ModuleControlButtons/>
                </div>
                <ListGroup className="wd-lessons rounded-0">

                    <ListGroupItem className="wd-lesson p-3 ps-1 fw-bold">LESSON 3 - Styling Web Pages with CSS</ListGroupItem>

                    {/* Learning Objectives */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Understand the role of CSS in web design <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Apply selectors, colors, and fonts <LessonControlButtons />
                    </ListGroupItem>

                    {/* Reading */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 5 - CSS Basics <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 6 - Advanced CSS Selectors <LessonControlButtons />
                    </ListGroupItem>

                    {/* Slides */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> CSS Syntax and Selectors <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> The Box Model and Layouts <LessonControlButtons />
                    </ListGroupItem>

                    <ListGroupItem className="wd-lesson p-3 ps-1 fw-bold">LESSON 4 - Page Layouts with CSS</ListGroupItem>

                    {/* Learning Objectives */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Explore flexbox and grid for layouts <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Build responsive page structures <LessonControlButtons />
                    </ListGroupItem>

                    {/* Reading */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 7 - Page Layout with CSS <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 8 - Responsive Design <LessonControlButtons />
                    </ListGroupItem>

                    {/* Slides */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Flexbox Fundamentals <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Responsive Page Design <LessonControlButtons />
                    </ListGroupItem>

                </ListGroup>
            </ListGroupItem>

            {/* WEEK 3 */}
            <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-1" />
                    Week 3
                    <ModuleControlButtons/>
                </div>
                <ListGroup className="wd-lessons rounded-0">

                    <ListGroupItem className="wd-lesson p-3 ps-1 fw-bold">LESSON 5 - Introduction to JavaScript</ListGroupItem>

                    {/* Learning Objectives */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Understand the role of JavaScript in web development <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Write basic JavaScript programs <LessonControlButtons />
                    </ListGroupItem>

                    {/* Reading */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 9 - JavaScript Basics <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 10 - Variables and Data Types <LessonControlButtons />
                    </ListGroupItem>

                    {/* Slides */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> JavaScript Syntax and Basics <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Variables, Data Types, and Operators <LessonControlButtons />
                    </ListGroupItem>

                    <ListGroupItem className="wd-lesson p-3 ps-1 fw-bold">LESSON 6 - Control Flow in JavaScript</ListGroupItem>

                    {/* Learning Objectives */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Use conditional statements (if, else, switch) <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Apply loops (for, while, for…of) <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Understand how control flow structures logic in programs <LessonControlButtons />
                    </ListGroupItem>

                    {/* Reading */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 11 - Control Structures <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 12 - Iteration and Loops <LessonControlButtons />
                    </ListGroupItem>

                    {/* Slides */}
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Conditional Statements in JavaScript <LessonControlButtons />
                    </ListGroupItem>
                    <ListGroupItem className="wd-lesson ps-4">
                        <BsGripVertical className="me-2 fs-3" /> Loops and Iteration <LessonControlButtons />
                    </ListGroupItem>

                </ListGroup>
            </ListGroupItem>

        </ListGroup>
    );
}
