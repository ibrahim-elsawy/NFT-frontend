import React, { useState, useEffect } from 'react';
import img from '../assets/dog.jpg'
import { Option } from './Option';
import download from '../assets/download.png';
import user from '../assets/user.png';
import date from '../assets/date.png';
import heartNotPress from '../assets/heart-notPress.png';
import heartPress from '../assets/heart-press.png';
import { saveAs } from 'file-saver';
import axios from 'axios';

const Card = (props) => {

	const [token, setToken] = useState(null);
	const [liked, setLiked] = useState(false);
	const [cardId, setCardId] = useState(null);
	const [numLikes, setNumLikes] = useState(props.likes);

		
	const onLike = async() => { 
		try {
			liked ? setNumLikes(numLikes - 1) : setNumLikes(numLikes + 1);
			setLiked(!liked);
			// const response = await axios.post(`http://localhost:5000/${route}`, {headers:{"x-auth":token}});
			const response = await axios.post(`http://localhost:5000/interact`, {"image_id":cardId}, {headers:{"x-auth":token}});
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		setCardId(props.cardId)
		setToken(localStorage.getItem("authToken"))
		checkLike(props.cardId, localStorage.getItem("authToken"));
	}, [props.cardId]);
	
	const onDownload = () => { 
		saveAs(img);
	};

	const checkLike = async (i, t) => { 
		const response = await axios.post(`http://localhost:5000/checklike`, { "image_id": i}, { headers: { "x-auth": t } });
		(response.data.action === 1) ? setLiked(true) : setLiked(false);
	};
	return (
		<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
			<img class="rounded-t-lg" src={props.img} alt="" />
			<div class="p-5">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ props.title}</h5>
				<div className="flex justify-between">
					<Option logo={liked ? heartPress : heartNotPress} name={numLikes} onClick={onLike} displayButton={true} token={token}></Option>
					<Option logo={user} displayButton={false} name={props.user}></Option>
					<Option logo={date} displayButton={false} name={ props.date+" ago"}></Option>
					<Option logo={download} onClick={onDownload} displayButton={true}></Option>
				
				</div>
				</div>
			</div>
	)
}

export default Card;