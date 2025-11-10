
"use client";

import { redirect, useRouter } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";

import * as client from "../client";

import Link from "next/link";
import { Col, FormControl, Row } from "react-bootstrap";
export default function Signup() {
    const [user, setUser] = useState<any>({
        username: "",
        password: ""
    });
    const dispatch = useDispatch();
    const router = useRouter();
    
    const signup = async () => {
        const currentUser = await client.signup(user);
        dispatch(setCurrentUser(currentUser));
        // redirect("/Profile");
        router.push("/Account/Profile");
    };

    return (
        // <div id="wd-signup-screen">
        //     <Row>
        //         <Col>
        //             <div>
        //                 <br />
        //                 <h2>Sign up for a Kambaz Account:</h2><br />
        //                 <FormControl id="wd-username"
        //                     placeholder="Username"
        //                     className="mb-2" />
        //                 <FormControl id="wd-password"
        //                     placeholder="Password" type="password"
        //                     className="mb-2" /><br />
        //                 <Link id="wd-signin-btn"
        //                     href="/Account/Profile"
        //                     className="btn btn-primary w-100 mb-2">
        //                     Sign up </Link><br />
        //                 <Link id="wd-signin-link" href="/Account/Signin">Sign up</Link>
        //             </div>
        //         </Col>
        //     </Row>
        // </div>);
        <div className="wd-signup-screen">
            <h1>Sign up</h1>
            <FormControl value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="wd-username b-2" placeholder="username" />
            <FormControl value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="wd-password mb-2" placeholder="password" type="password" />
            <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100"> Sign up </button><br />
            <Link href="/Account/Signin" className="wd-signin-link">Sign in</Link>
        </div>
    )
}