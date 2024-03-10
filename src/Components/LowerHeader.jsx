import React from 'react'
// import { ClassType } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import classes from '../Components/Header/Header.module.css'
function LowerHeader() {
  return (
		<div className={classes.lower_container}>
			<ul>
				<li>
					<AiOutlineMenu />
					<p>All</p>
				</li>

				<li>Today's Deals</li>
				<li>costumer service</li>
				<li>Registry</li>
				<li>Gift Cards</li>
				<li>sell</li>
			</ul>
		</div>
	);
}

export default LowerHeader