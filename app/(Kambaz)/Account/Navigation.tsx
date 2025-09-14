import Link from "next/link";
export default function AccountNavigation() {
    return (
        <div>
            <ul>
                <br/>
                <li>
                    <Link href="Signin" id="accnav-signin">Sign In</Link>
                </li>
               <li>
                    <Link href="Signup" id="accnav-signup">Sign Up</Link>
                <br/>
               </li>
                <li>
                    <Link href="Profile" id="accnav-profile">Profile</Link>
                </li>
                <br/>
            </ul>
            
        </div>
    )
}