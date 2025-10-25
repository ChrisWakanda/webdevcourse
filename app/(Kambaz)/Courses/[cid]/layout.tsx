"use client"
import { ReactNode, useState } from "react";
import { FaAlignJustify } from 'react-icons/fa6';
import CourseNavigation from "./coursenavigation";
import { courses } from "../../Database";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

export default function CoursesLayout(
  /*{ children, params }: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>*/
{ children }: { children: ReactNode }) {
 //const { cid } = await params;
 const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
 const course = courses.find((course: any) => course._id === cid);
 const [showNav, setShowNav] = useState(true);
 return (
   <div id="wd-courses">
     <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1"
      style={{ cursor: "pointer" }}
      onClick={() => setShowNav(!showNav)} />
      {cid} - <Breadcrumb course={course}/>
      {/* {cid} - {course?.name} */}
    </h2>
     <hr />
     <div className="d-flex">
      {showNav && (
        <div className="d-none d-md-block">
          <CourseNavigation cid={cid as string}/>
        </div>
      )
      }
        <div className="flex-fill">
          {children}
        </div>
     </div>
   </div>
);}
