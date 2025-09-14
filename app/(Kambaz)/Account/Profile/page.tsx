import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Your Profile</h3>
      <label htmlFor="profile-username">Your Username: </label>
      <input defaultValue="alice" placeholder="username" className="wd-username" id="profile-username"/><br/>
      <label htmlFor="profile-password">Your Password: </label>
      <input defaultValue="123"   id="profile-password" placeholder="password" type="password" className="wd-password" /><br/>
      <label htmlFor="wd-firstname">Your First Name: </label>
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
      <label htmlFor="wd-lastname">Your Last Name: </label>
      <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
      <label htmlFor="profile-dob">Your Date of Birth: </label>
      <input defaultValue="2000-01-01" id="profile-dob" type="date" /><br/>
      <label htmlFor="wd-email">Your Email ID: </label>
      <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
      <label htmlFor="wd-role">Your Role: </label>
      <select defaultValue="STUDENT" id="wd-role">
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> 
        <option value="STUDENT">Student</option>
      </select>
      <br/>
      <Link href="Signin" > Sign out </Link>
    </div>
);}
