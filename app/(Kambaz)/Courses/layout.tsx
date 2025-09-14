import { ReactNode } from "react";
import CourseNavigation from "./[cid]/coursenavigation";
export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <table>
            <tbody>
                <tr>
                    <td valign="top" width="200">
                        <CourseNavigation />
                    </td>
                    <td valign="top" width="90%">{children}</td>
                </tr>
            </tbody>
        </table>
    )
}