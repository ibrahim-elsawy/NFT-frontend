import React, {useState} from "react";
import { Option } from "./Option";


export const Button = (props) => { 
	const [clicked, setClicked] = useState(false);
	const onSupport = () => { 
		props.onClick();
		setClicked(!clicked);
	};
	return (
		<button className={`bg-transparent w-10 h-8 m-3 `} onClick={onSupport}>
			<Option name="" logo={clicked ? props.press : props.not_press} padding="px-2"></Option>
		</button>

	)
};