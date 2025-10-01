import Link from "next/link";
export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <Link href="/Account/Signin" id="wd-course-home-link" className="list-group-item active border-0">Sign In</Link>
            <Link href="/Account/Signup" id="wd-course-modules-link" className="list-group-item text-danger border-0">Sign up
                </Link>
            <Link href="/Account/Profile" id="wd-course-piazza-link" className="list-group-item text-danger border-0">Profile</Link>
      </div>
    )
}

