import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span className="badge rounded-pill text-dark border me-2">
        40% of Total
      </span>
      <BsPlus className="position-relative fs-2" style={{ bottom: "1px"}} />
      <IoEllipsisVertical className="fs-4" />
    </div> );}