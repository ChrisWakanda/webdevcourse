import Link from "next/link";
export default function Signup() {
    return (
        <div>
            <h1>
                Sign Up for a Kambaz Account
            </h1>
            <label htmlFor="signup-username">
                Username:
            </label>
            <input placeholder="username" id="signup-username" />
            <br/>
            <label htmlFor="signup-password">
                Password:
            </label>
            <input placeholder="password" type="password" id="signup-password" />
            <br/>
            <br/>
            <Link href="Profile">Profile</Link>
            <br/>
            <h4>
                Already have an account? 
            </h4>
            <Link href="Signin">Sign In</Link>
        </div>
    )
}