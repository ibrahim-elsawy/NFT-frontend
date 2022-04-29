import React, { useState } from 'react'
import r_press from '../assets/r_arrow_press.png';
import r_not_press from '../assets/r_arrow_not_press.png';
import l_not_press from '../assets/l_arrow_not_press.png';
import l_press from '../assets/l_arrow_press.png';
import bar_press from '../assets/bar_press.png';
import bar_not_press from '../assets/bar_not_press.png';
import { Button } from './button';
import main from '../assets/main.gif';

function ImageDisplay() { 
	const textImage = [
		"Global warming ",
		"Midnight City",
		"Mountain",
		"Painting of beach sunset",
		"painting of refugee in war",
		"Underwater City",
	];
	const classCss = [
		"global",
		"midnight",
		"mountain",
		"sunset",
		"war",
		"underwater"
	];
	const [Index, setIndex] = useState(0);
	const nextImage = (index) => { 
		index > 5 ? setIndex(0) : setIndex(index)
	};
	const onLeftArrow = () => { 
		let i = Index === 0 ? 5 : Index-1;
		nextImage(i);
	};
	const onRightArrow = () => { 
		nextImage(Index + 1);
	};
	const onBarClick = (indexOfComponent) => { 
		return  (indexOfComponent) => { 
			nextImage(indexOfComponent);
		};
	};
	return ( 
		<div className={` flex p-2  md:justify-center md:h-9/12 md:w-9/12`} >
			<img className=" rounded-xl bg-no-repeat bg-contain md:h-6/12 md:w-6/12 md:self-center" src={ main }/>
			{/* <div className="flex space-x-60">
				<Button onClick={onLeftArrow} press={l_press} not_press={l_not_press} ></Button>
				<Button onClick={onRightArrow} press={r_press} not_press={r_not_press}></Button>
			</div> */}
			{/* <div className="flex flex-col ">
				<div>{ textImage[Index]}</div>
				<div className="p-0 m-0">
					{textImage.map((item) => <Button key={item} onClick={onBarClick(textImage.indexOf(item))} press={bar_press} not_press={bar_not_press}></Button>)}
				</div>
			</div> */}
		</div>
	) 
}

;

export default ImageDisplay;