import Link from "next/link";
import { Col, FormControl, Row } from "react-bootstrap";
export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <Row>
                <Col>
                    <div>
                        <br/>
                        <h2>Sign in to your Kambaz Account:</h2><br/>
                        <FormControl id="wd-username"
                            placeholder="Username"
                            className="mb-2" />
                        <FormControl id="wd-password"
                            placeholder="Password" type="password"
                            className="mb-2" /><br />
                        <Link id="wd-signin-btn"
                            href="/Account/Profile"
                            className="btn btn-primary w-100 mb-2">
                            Sign in </Link><br />
                        <Link id="wd-signup-link" href="/Account/Signup">Sign up</Link>
                    </div>
                </Col>
            </Row>
        </div>);
}