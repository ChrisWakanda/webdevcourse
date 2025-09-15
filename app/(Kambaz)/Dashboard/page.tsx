import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
    return (
        <div id="dashboard">
            <h1>
                Kambaz Dashboard
            </h1>
            <hr/>
            <h3>
                Published Courses:
            </h3>
            <hr/>
            <div id="dashboard-course-list">
                <div className="dashboard-course">
                    <Link href="/Courses/001" className="dashboard-course-link">
                        <Image src="/images/reactjs1.jpg" alt="Reactjs Course Image" width={300} height={200}></Image>
                        <div>
                            <h5>
                                CS001 React JS
                            </h5>
                            <p className="dashboard-course-title">
                                Full Stack Software Developer
                            </p>
                            <button>
                                Go
                            </button>
                        </div>
                    </Link>
                    <br/>
                    <Link href="/Courses/002" className="dashboard-course-link">
                        <Image src="/images/angular.jpg" alt="Angular Course Image" width={300} height={200}></Image>
                        <div>
                            <h5>
                                CS002 Angular
                            </h5>
                            <p className="dashboard-course-title">
                                Full Stack Software Developer
                            </p>
                            <button>
                                Go
                            </button>
                        </div>
                    </Link>
                    <Link href="/Courses/003" className="dashboard-course-link">
                        <Image src="/images/vuejs1.jpg" alt="Vue.js Course Image" width={300} height={200}></Image>
                        <div>
                            <h5>
                                CS003 Vue.js
                            </h5>
                            <p className="dashboard-course-title">
                                Full Stack Software Developer
                            </p>
                            <button>
                                Go
                            </button>
                        </div>
                    </Link>
                </div>
                <div className="dashboard-course">...</div>
                <div className="dashboard-course">...</div>
            </div>
        </div>
    )
}