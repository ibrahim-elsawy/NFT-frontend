import React, {useState, useEffect} from "react";

export const Option = (props) => {

	const [button, setButton] = useState('');
	const [image, setImage] = useState('hidden');
		
	const onLike = () => { 
		try {
			props.token && props.onClick();
			console.log();
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		setButton(props.displayButton ? '' : "hidden" )
		setImage(props.displayButton ? 'hidden' : "" )
	}, [props.displayButton]);
	return (
		<div className={`${props.padding} flex flex-row`}>
			<button className={`${button}`} onClick={onLike}><img className="mt-0.5 h-6 w-6" src={props.logo} alt="" /></button>
			<img className={`mt-0.5 h-6 w-6 ${image}`} src={props.logo} alt="" />
			<div className={` hidden sm:block sm:pr-2 pl-1 text-xs`}> {props.name} </div>
		</div>
	)
};