import { ReactNode } from "react";
import KambazNavigation from "./kambaznavigation";
export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <table>
            <tbody>
                <tr>
                    <td valign="top" width="200">
                        <KambazNavigation />
                    </td>
                    <td valign="top" width="90%">{children}</td>
                </tr>
            </tbody>
        </table>
    )
}