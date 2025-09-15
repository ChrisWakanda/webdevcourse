import Link from "next/link";
export default function Signin() {
    return (
        <div>
            <h1>
                Sign In to your Kambaz Account
            </h1>
            <label htmlFor="signin-username">
                Username:
            </label>
            <input placeholder="username" id="signin-username" defaultValue="Aryan"/>
            <br/>
            <label htmlFor="signin-password">
                Password:
            </label>
            <input placeholder="password" type="password" id="signin-password" defaultValue="Aryan"/>
            <br/>
            <br/>
            <Link href="/Dashboard">Sign in to your account</Link>
            <br/>
            <h4>
                Do not have an account? 
            </h4>
            <Link href="Signup">Sign Up</Link>
        </div>
    )
}