// import Link from "next/link";
// export default function AccountNavigation() {
//     return (
//         <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//             <Link href="/Account/Signin" id="wd-course-home-link" className="list-group-item active border-0">Sign In</Link>
//             <Link href="/Account/Signup" id="wd-course-modules-link" className="list-group-item text-danger border-0">Sign up
//                 </Link>
//             <Link href="/Account/Profile" id="wd-course-piazza-link" className="list-group-item text-danger border-0">Profile</Link>
//       </div>
//     )
// }

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
 const pathname = usePathname();
 return (
   <Nav variant="pills">
     {links.map((link) => (
       <NavItem key={link}>
         <NavLink as={Link} href={link} active={pathname.endsWith(link.toLowerCase())}>
           {link} </NavLink> </NavItem>
     ))}
   </Nav>
);}
