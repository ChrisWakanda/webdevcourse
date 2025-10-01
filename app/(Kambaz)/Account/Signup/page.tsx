// import Link from "next/link";
// export default function Signup() {
//     return (
//         <div>
//             <h1>
//                 Sign Up for a Kambaz Account
//             </h1>
//             <label htmlFor="signup-username">
//                 Username:
//             </label>
//             <input placeholder="username" defaultValue="aryan" id="signup-username" />
//             <br/>
//             <label htmlFor="signup-password">
//                 Password:
//             </label>
//             <input placeholder="password" defaultValue="raveshia" type="password" id="signup-password" />
//             <br/>
//             <label htmlFor="signup-verify-password">Verify Password:</label>
//             <input placeholder="verify password" defaultValue="raveshia" type="password" id="signup-verify-password" />
//             <br/>
//             <label htmlFor="profile-dob">Your Date of Birth: </label>
//             <input defaultValue="2000-01-01" id="profile-dob" type="date" /><br/>
//             <label htmlFor="wd-email">Your Email ID: </label>
//             <input defaultValue="aryan@gmail.com" placeholder="your email" type="email" id="wd-email" /><br/>
//             <label htmlFor="wd-role">Your Role:</label>
//             <select defaultValue="STUDENT" id="wd-role">
//                 <option value="ADMIN">Admin</option>
//                 <option value="FACULTY">Faculty</option> 
//                 <option value="STUDENT">Student</option>
//                 <option value="EXTERNAL USER">External User</option>
//             </select>
//             <br/><br/>
//             <Link href="Profile">Create Account or Sign Up</Link>
//             <br/>
//             <h4>
//                 Already have an account? 
//             </h4>
//             <Link href="Signin">Sign In</Link>
//         </div>
//     )
// }


// import Link from "next/link";
// export default function Signin() {
//     return (
//         <div>
//             <h1>
//                 Sign In to your Kambaz Account
//             </h1>
//             <label htmlFor="signin-username">
//                 Username:
//             </label>
//             <input placeholder="username" id="signin-username" defaultValue="Aryan"/>
//             <br/>
//             <label htmlFor="signin-password">
//                 Password:
//             </label>
//             <input placeholder="password" type="password" id="signin-password" defaultValue="Aryan"/>
//             <br/>
//             <br/>
//             <Link href="/Dashboard">Sign in to your account</Link>
//             <br/>
//             <h4>
//                 Do not have an account? 
//             </h4>
//             <Link href="Signup">Sign Up</Link>
//         </div>
//     )
// }

import Link from "next/link";
import { Col, FormControl, Row } from "react-bootstrap";
export default function Signin() {
    return (
        <div id="wd-signup-screen">
            <Row>
                <Col>
                    <div>
                        <br/>
                        <h2>Sign up for a Kambaz Account:</h2><br/>
                        <FormControl id="wd-username"
                            placeholder="Username"
                            className="mb-2" />
                        <FormControl id="wd-password"
                            placeholder="Password" type="password"
                            className="mb-2" /><br />
                        <Link id="wd-signin-btn"
                            href="/Account/Profile"
                            className="btn btn-primary w-100 mb-2">
                            Sign up </Link><br />
                        <Link id="wd-signin-link" href="/Account/Signin">Sign up</Link>
                    </div>
                </Col>
            </Row>
        </div>);
}