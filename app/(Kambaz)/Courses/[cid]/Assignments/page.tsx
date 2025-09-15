import Link from "next/link";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </a> </li>
          <span>
            Multiple Modules | <b>Not available</b> until January 12 at 12:00am  
          </span>
          <br/>
          <span>
            <b>Due:</b> January 20 at 11:59pm
          </span>
          <br/>
          <span>
            <b>100 Points</b>
          </span>
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link">A2 - CSS + BOOTSTRAP</Link>
        </li>
        <span>
            Multiple Modules | <b>Not available</b> until January 20 at 12:00am  
          </span>
          <br/>
          <span>
            <b>Due:</b> January 27 at 11:59pm
          </span>
          <br/>
          <span>
            <b>100 Points</b>
          </span>
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/124" className="wd-assignment-link">A3 - JAVASCRIPT + REACT</Link>
        </li>
        <span>
            Multiple Modules | <b>Not available</b> until January 27 at 12:00am  
          </span>
          <br/>
          <span>
            <b>Due:</b> February 4 at 11:59pm
          </span>
          <br/>
          <span>
            <b>100 Points</b>
          </span>
      </ul>
    </div>
);}
