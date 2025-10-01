import { Button, Card, CardBody, CardImg, CardText, CardTitle, Nav, NavItem, NavLink } from "react-bootstrap";

export default function BootstrapNavigation() {
    return (
        <>
            <div id="wd-css-navigating-with-tabs">
                <br />
                <h2>Tabs:</h2>
                <br />
                <Nav variant="tabs">
                    <NavItem>
                        <NavLink href="#/Labs/Lab2/Active">Active</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#/Labs/Lab2/Link1">Link 1</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#/Labs/Lab2/Link2">Link 2</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#/Labs/Lab2/Disabled" disabled>Disabled</NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div id="wd-css-navigating-with-cards">
                <br/>
                <h2> Cards:</h2>
                <br/>
                <Card style={{ width: "18rem" }}>
                    <CardImg variant="top" src="/images/starship.jpg" />
                    <CardBody>
                        <CardTitle>Stacking Starship</CardTitle>
                        <CardText>
                            Stacking the most powerful rocket in history. Mars or bust!
                        </CardText>
                        <Button variant="primary">Boldly Go!</Button>
                    </CardBody>
                </Card>
            </div>

        </>
    )
}