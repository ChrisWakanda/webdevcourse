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
            <label htmlFor="signup-password">
                Password:
            </label>
            <label htmlFor="signup-verify-password"></label>
            <input placeholder="verify password" type="password" id="signup-verify-password" />
            <br/>
            <Link href="Profile">Create Account</Link>
            <br/>
            <h4>
                Already have an account? 
            </h4>
            <Link href="Signin">Sign In</Link>
        </div>
    )
}