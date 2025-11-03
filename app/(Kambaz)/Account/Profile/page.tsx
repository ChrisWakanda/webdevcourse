// import Link from "next/link";
// import { Button, Col, FormControl, FormLabel, InputGroup, Row } from "react-bootstrap";
// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <br/>
//       <div className="p-3">
//         <Row>
//           <h2>Your Profile:</h2>
//         </Row>
//         <Row className="p-1">
//           <FormLabel column sm={3}>Username:</FormLabel>
//           <Col sm={9}>
//             <FormControl defaultValue="Alice"></FormControl>
//           </Col>
//         </Row>
//         <Row className="p-1">
//           <FormLabel column sm={3}>Password:</FormLabel>
//           <Col sm={9}>
//             <FormControl defaultValue="12345"></FormControl>
//           </Col>
//         </Row>
//         <Row className="p-1">
//           <FormLabel column sm={3}>First Name:</FormLabel>
//           <Col sm={9}>
//             <FormControl defaultValue="Alice"></FormControl>
//           </Col>
//         </Row>
//         <Row className="p-1">
//           <FormLabel column sm={3}>Last Name:</FormLabel>
//           <Col sm={9}>
//             <FormControl defaultValue="Wonderland"></FormControl>
//           </Col>
//         </Row>
//         <Row className="p-1">
//           <FormLabel column sm={3}>Date of Birth:</FormLabel>
//           <Col sm={9}>
//             <InputGroup>
//               <FormControl type="date" defaultValue="2002-04-24"></FormControl>
//             </InputGroup>
//           </Col>
//         </Row>
//         <Row className="p-1">
//           <FormLabel column sm={3}>Email:</FormLabel>
//           <Col sm={9}>
//             <FormControl defaultValue="alice@gmail.com"></FormControl>
//           </Col>
//         </Row>
//         <Row className="p-1">
//           <FormLabel column sm={3}>Role:</FormLabel>
//           <Col sm={9}>
//             <FormControl defaultValue="User"></FormControl>
//           </Col>
//         </Row>
//         <br/>
//         <Row>
//           <Col sm={3}>
//           </Col>
//           <Col sm={9} className="d-grid">
//             <Button href="/Account/Signin" variant="danger" size="sm" id="wd-add-module-btn">
//               Sign out
//             </Button>
//           </Col>
//         </Row>
//       </div>
//     </div>
// );}


"use client";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { Button, FormControl } from "react-bootstrap";
export default function Profile() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const [profile, setProfile] = useState<any>({});
 const dispatch = useDispatch();
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const { currentUser } = useSelector((state: any) => state.accountReducer);
 const fetchProfile = () => {
   if (!currentUser) return redirect("/Account/Signin");
   setProfile(currentUser);
 };
 const signout = () => {
   dispatch(setCurrentUser(null));
   redirect("/Account/Signin");
 };
 useEffect(() => {
   fetchProfile();
 }, []);
 return (
   <div className="wd-profile-screen">
     <h3>Profile:</h3>
     <hr/><br/>
     {profile && (
       <div>
        <h6>Username:</h6>
         <FormControl id="wd-username" className="mb-2"
           defaultValue={profile.username}
           onChange={(e) => setProfile({ ...profile, username: e.target.value }) }
         />
         <h6>Password:</h6>
         <FormControl id="wd-password" className="mb-2"
           defaultValue={profile.password}
           onChange={(e) => setProfile({ ...profile, password: e.target.value }) }
         />
         <h6>First Name:</h6>
         <FormControl id="wd-firstname" className="mb-2"
           defaultValue={profile.firstName}
           onChange={(e) => setProfile({ ...profile, firstName: e.target.value }) }
         />
         <h6>Last Name:</h6>
         <FormControl id="wd-lastname" className="mb-2"
           defaultValue={profile.lastName}
           onChange={(e) => setProfile({ ...profile, lastName: e.target.value }) } />

          <h6>Date of Birth:</h6>
         <FormControl id="wd-dob" className="mb-2" type="date"
           defaultValue={profile.dob}
           onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
           <h6>Email:</h6>
         <FormControl id="wd-email" className="mb-2"
           defaultValue={profile.email}
           onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
           <h6>Role:</h6>
         <select className="form-control mb-2" id="wd-role" 
           onChange={(e) => setProfile({ ...profile, role: e.target.value })} >
           <option value="USER">User</option>
           <option value="ADMIN">Admin</option>
           <option value="FACULTY">Faculty</option>{" "}
           <option value="STUDENT">Student</option>
         </select>
         <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
           Sign out
         </Button>
       </div>
     )}
   </div>
);}
