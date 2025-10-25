// import { IoEllipsisVertical } from "react-icons/io5";
// import { BsPlus } from "react-icons/bs";
// import GreenCheckmark from "../Modules/GreenCheckmark";
// export default function AssignmentItemControlButtons() {
//   return (
//     <div className="float-end">
//       <GreenCheckmark/>
//       <IoEllipsisVertical className="fs-4" />
//     </div> );}

"use client"
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentItemControlButtons({ 
  assignmentId, 
  onDelete 
}: { 
  assignmentId: string; 
  onDelete: (id: string) => void;
}) {
  return (
    <div className="float-end d-flex align-items-center">
      <GreenCheckmark/>
      <FaTrash
        className="text-danger me-2 ms-2"
        style={{ cursor: "pointer", fontSize: "1.2rem" }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onDelete(assignmentId);
        }}
      />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}