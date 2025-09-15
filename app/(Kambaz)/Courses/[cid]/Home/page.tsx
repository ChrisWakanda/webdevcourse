import Modules from "../Modules/page";
import CourseStatus from "./status";
export default function Home() {
    return (
        <div id="wd-home">
     <table>
       <tbody>
        <tr>
            <td>
                <button>Collapse All</button>
                <button>View Progress</button>
                <select name="home-screen-publish">
                    <option value="Publish All">
                        Publish All
                    </option>
                    <option value="etc">
                        etc
                    </option>
                </select>
                <button>+ Module</button>
            </td>
        </tr>
         <tr>
           <td valign="top" width="85%"> <Modules /> </td>
           <td valign="top"> <CourseStatus /> </td>
         </tr>
       </tbody>
     </table>
   </div>
    );
}
