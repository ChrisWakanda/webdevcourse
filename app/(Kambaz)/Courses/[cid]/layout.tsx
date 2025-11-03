"use client"
import { ReactNode, useState, useEffect } from "react";
import { FaAlignJustify } from 'react-icons/fa6';
import CourseNavigation from "./coursenavigation";
import { courses } from "../../Database";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";

export default function CoursesLayout(
  /*{ children, params }: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>*/
{ children }: { children: ReactNode }) {
 //const { cid } = await params;
 const { cid } = useParams();
 const router = useRouter(); // Added for redirection


// 1. Get auth data from Redux
 const { currentUser } = useSelector((state: any) => state.accountReducer);
 const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
 
 // 2. State to track authorization
 const [isAuthorized, setIsAuthorized] = useState(false);

 // 3. The authorization check effect
 useEffect(() => {
    // Wait until enrollments and user data are loaded
    if (enrollments && currentUser) {
      // Check if enrolled
      const isEnrolled = enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id &&
          enrollment.course === cid
      );

      if (isEnrolled) {
        setIsAuthorized(true); // All good, allow render
      } else {
        // Not enrolled, redirect
        router.push("/Dashboard");
      }
    } else if (enrollments && !currentUser) {
      // Data is loaded, but no user is logged in
      router.push("/Dashboard");
    }
    // If enrollments or currentUser are still loading (undefined),
    // this effect does nothing, and isAuthorized stays false.
 }, [currentUser, enrollments, cid, router]);

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { courses } = useSelector((state: any) => state.coursesReducer);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
