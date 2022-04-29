import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

	const [colorChange, setColorchange] = useState(false);
	
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		}
		else {
			setColorchange(false);
		}
	};
	window.addEventListener('scroll', changeNavbarColor);
	return (
		<div className={` transition-all ease-in-out delay-350 ${colorChange && " bg-rose-600 transition-all delay-150 "} sticky top-0 z-50 rounded-b-sm`}>
			<div className=" flex justify-between p-3">
				<div className="text-white font-sans text-base tracking-widest font-medium text"> Text2Art </div>
				<div className="flex">
					<Link  to="/" className="font-mono m-1 italic text-white">Home</Link>
					<button className="font-mono m-1 italic text-white">Gallary</button>
				</div>
			
			</div>
		</div>
	)
}

export default NavBar;