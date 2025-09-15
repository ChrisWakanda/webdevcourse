import Link from "next/link";
export default function KambazNavigation() {
    return (
        <div>
            <Link href="https://www.northeastern.edu/" id="kambaznav-neu" target="_blank" rel="noopener noreferrer">Northeastern</Link>
            <br/>
            <Link href="/Account" id="kambaznav-account">Account</Link>
            <br/>
            <Link href="/Account/Profile" id="kambaznav-profile">Profile</Link>
            <br/>
            <Link href="/Dashboard" id="kambaznav-dashboard">Dashboard</Link>
            <br/>
            <Link href="/Dashboard" id="kambaznav-courses">Courses</Link>
            <br/>
            <Link href="/Calendar" id="kambaznav-calendar">Calendar</Link>
            <br/>
            <Link href="/Inbox" id="kambaznav-inbox">Inbox</Link>
            <br/>
            <Link href="/Labs" id="kambaznav-labs">Labs</Link>
            <br/>
            <Link href="https://github.com/ChrisWakanda/webdevcourse/tree/lab1" id="kambaznav-github" target="_blank" rel="noopener noreferrer">Github</Link>
            <h6>
                Made by Aryan Ishan Raveshia
            </h6>
        </div>
    )
}