import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";

const Navigation = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar color="dark" dark expand="md">
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink href="/">Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/About">About</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/blog/Notas">Notas</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/Test">Test</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/Ejercicio">Ejercicio</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Navigation;
