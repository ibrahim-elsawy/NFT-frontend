import React, {useEffect, useState} from 'react'
import Card from './card';
import axios from 'axios';

const Gallary = () => {
	const [token, setToken] = useState(null);
	const [indexPostCard, setIndexCard] = useState(0);
	const [images, setImages] = useState(null);
	const [date, setDate] = useState(null);
	const [ids, setIds] = useState(null);
	const [likes, setLikes] = useState(null);
	const [title, setTitle] = useState(null);
	const [user, setUser] = useState(null);
	const [numPosts, setNumPosts] = useState(0);
	const [sending, setSending] = useState(false);

	useEffect(() => {
		// setToken(localStorage.getItem("authToken"))
		// const response = await axios.post('http://localhost:5000/images', {"limit":limit, "offset":offset});
		const getNumImages = async () => { 
			const res = await axios.get('http://localhost:5000/num');
			setNumPosts(res.data.num);
		};
		const requestCards = async (limit, offset) => {
			const response = await axios.post('http://localhost:5000/images', {"limit":limit, "offset":offset});
			// const response = await axios.get('http://localhost:5000/num');
			console.log(response.data.images[0]);
			setImages(response.data.images);
			setDate(response.data.date);
			setIds(response.data.ids);
			setLikes(response.data.likes);
			setTitle(response.data.title);
			setUser(response.data.user);
		};
		requestCards(6, indexPostCard);
		getNumImages();
		window.onscroll = function (ev) {
			if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
				console.log("errrooooor.....")
				// you're at the bottom of the page 
				// if (sending === false) {
					// console.log("sending ")
					// setSending(true);
					//send request
				// }
			};
};

	}, [indexPostCard]);
	
	//overflow-scroll
	return (
		<div className={`flex flex-col backimage-gallary h-max w-full items-center mt-2 pt-2 mb-0 pb-0`}>
			<div className="font-sans text-4xl tracking-wide font-medium m-1 mt-3 text-gray-900">Gallary</div>
			<div className="text-gray-700 font-sans text-xl tracking-wide font-medium pb-3">Check out what others made!</div>
			<div className="grid grid-cols-3 gap-20 ">
				{images && images.map((im) => {
					const i = images.findIndex(n => n === im);
					return (<Card
						key={ids[i]}
						img={im}
						cardId={ids[i]}
						title={title[i]}
						likes={likes[i]}
						user={user[i]}
						date={date[i]}
					></Card>)
				})}
			</div>
			<svg role="status" className={`${(sending===false) && "hidden "} mt-4 inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
				<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
			</svg>
		</div>
	)
}

export default Gallary;