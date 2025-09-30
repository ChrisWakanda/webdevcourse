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
            </tbody>
        </table>
        <div className="d-flex" id="wd-home">
            <div className="flex-fill me-3">
                <Modules/>
            </div>
            <div className="d-none d-lg-block">
                <CourseStatus />
            </div>
        </div>
   </div>
    );
}
