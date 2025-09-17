import Link from "next/link";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link href="/Courses/001/Home" id="wd-course-home-link">Home</Link><br/><br/>
      <Link href="/Courses/001/Modules" id="wd-course-modules-link">Modules
        </Link><br/><br/>
      <Link href="/Courses/001/Piazza" id="wd-course-piazza-link">Piazza</Link><br/><br/>
      <Link href="/Courses/001/Zoom" id="wd-course-zoom-link">Zoom</Link><br/><br/>
      <Link href="/Courses/001/Assignments" id="wd-course-quizzes-link">
          Assignments</Link><br/><br/>
      <Link href="/Courses/001/Quizzes" id="wd-course-assignments-link">Quizzes
        </Link><br/><br/>
      <Link href="/Courses/001/Grades" id="wd-course-grades-link">Grades</Link><br/><br/>
      <Link href="/Courses/001/People" id="wd-course-people-link">People</Link><br/><br/>
    </div>
  );}
