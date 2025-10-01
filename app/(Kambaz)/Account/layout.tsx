import { ReactNode } from "react";
import AccountNavigation from "./Navigation";
import { Col, Row } from "react-bootstrap";
export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div>
            <Row>
                <Col xs={3} lg={2}>
                    <AccountNavigation/>
                </Col>
                <Col xs={8} lg={9}>
                    {children}
                </Col>
                <Col xs={1} lg={1}>
                
                </Col>

            </Row>
        </div>

        // <table>
        //     <tbody>
        //         <tr>
        //             <td valign="top" width="10%">
        //                 <AccountNavigation />
        //             </td>
        //             <td valign="top" width="90%">{children}</td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}