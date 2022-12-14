import React, { useState } from "react";

import { Link } from "react-router-dom";
import BurgerButton from "../../../Buttons/components/BurgerButton/BurgerButton";
import CloseButton from "../../../Buttons/components/CloseButton/CloseButton";

import "./SideMenu.css";

const SideMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="side-menu-button">
			<BurgerButton onClick={() => setIsOpen(true)} />

			<div
				className="side-menu__box"
				style={{
					backgroundColor: isOpen && "rgba(0, 0, 0, 0.555)",
					pointerEvents: isOpen && "all",
				}}
				onClick={() => setIsOpen(false)}
			/>
			<div
				className="side-menu__card"
				style={{
					left: isOpen && "0vh",
				}}
			>
				<CloseButton margin={"0 0 3rem"} onClick={() => setIsOpen(false)} />
				<ul>
					<li>
						<Link to="/">Collections</Link>
					</li>
					<li>
						<Link to="/">Men</Link>
					</li>
					<li>
						<Link to="/">Women</Link>
					</li>
					<li>
						<Link to="/">About</Link>
					</li>
					<li>
						<Link to="/">Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideMenu;
