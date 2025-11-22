// import PeopleTable from "./Table/page";

// export default function People() {
//     return (
//         <div>
//             <h1>
//                 People
//             </h1>
//             <PeopleTable />
//         </div>
//     )
// }


"use client";
import { useState, useEffect } from "react";
import PeopleTable from "./Table/page";
import * as client from "../../../Account/client";
import * as courseClient from "../../client"; 
import { useParams } from "next/navigation";

export default function People() {
  const [users, setUsers] = useState<any[]>([]);
  const { cid } = useParams();

  const fetchUsers = async () => {
    const users = await courseClient.findUsersForCourse(cid as string);
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>People</h1>
      {/* We pass the data down here so PeopleTable stops complaining */}
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}