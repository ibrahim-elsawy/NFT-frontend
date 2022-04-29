import React, { useState, useEffect } from 'react'
import axios from "axios";
import { data } from 'autoprefixer';
import { toast } from 'react-toastify';

const Nft = () => {
	const [prompt, setPrompt] = useState(null);
	const [keyword, setKeyword] = useState("Artstation");
	const [quality, setQuality] = useState("draft");
	const [type, setType] = useState("image");
	const [file, setFile] = useState(null);
	const [aspect, setAspect] = useState("widescreen");
	const [publish, setPublish] = useState(false);
	const [token, setToken] = useState(null);
	
	const onKeyword = (e) => { 
		setKeyword(e.nativeEvent.originalTarget.innerText);
	};
	const onQuality = (e) => { 
		setQuality(e.nativeEvent.originalTarget.innerText);
	};
	const onType = (e) => { 
		setType(e.nativeEvent.originalTarget.innerText);
	};
	const onAspect= (e) => { 
		setAspect(e.nativeEvent.originalTarget.innerText);
	};
	const onPublish= (e) => { 
		setPublish(!publish);
	};
	const onUploadFile = (e) => { 
		setFile(e.target.files[0]);
	};
	useEffect(() => {
		setToken(localStorage.getItem("authToken"))
	}, []);
	// axios.defaults.headers.common['Authorization'] = token;
	async function generate() {
		try {
			console.log(token) 
			(token === null) && toast.warn('please sign in ', { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
			prompt ? toast.success('Request is sent successfully', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			}) :
				toast.error('please enter a valid prompt', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
			
			// Create an object of formData 
			const formData = new FormData();
			// Update the formData object 
			file && formData.append("initImage", file, file.name);
			formData.append("prompt", prompt);
			formData.append("keyword",keyword) 
			formData.append("quality", quality);
			formData.append("type", type);
			formData.append("aspect", aspect);
			formData.append("publish", publish);
			const response = prompt && token && await axios.post('http://localhost:5000/nft', formData, {headers:{"x-auth":token}});
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className='self-start my-2 p-2 md:self-center md:mx-80 md:w-6/12'>
			<p className="font-sans font-semibold">TEXT PROMPT</p>
			<input
				className=" bg-slate-200 shadow appearance-none rounded-full w-full p-2 text-blue-500 leading-tight focus:outline-none focus:shadow-outline"
				id="search"
				type="text"
				placeholder="E.g. Painting of beach sunset"
				onChange={(c) => setPrompt(c.target.value)}
			/>


			<p className="font-sans font-semibold mt-3 mb-2">KEYWORDS</p>
			<button type="button" onClick={onKeyword} className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br ${keyword==="Artstation" && " ring-4 outline-none ring-red-300"} font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>Artstation</button>
			<button type="button" onClick={onKeyword} className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br ${keyword==="Trending" && " ring-4 outline-none ring-red-300"} font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>Trending</button>
			<button type="button" onClick={onKeyword} className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br ${keyword==="Deviantart" && " ring-4 outline-none ring-red-300"} font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>Deviantart</button>
			<button type="button" onClick={onKeyword} className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br ${keyword==="Pixelart" && " ring-4 outline-none ring-red-300"} font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>Pixelart</button>
			<button type="button" onClick={onKeyword} className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br ${keyword==="Painting" && " ring-4 outline-none ring-red-300"} font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>Painting</button>
			<button type="button" onClick={onKeyword} className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br ${keyword==="Art" && " ring-4 outline-none ring-red-300"} font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>Art</button>
			<button type="button" onClick={onKeyword} className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br ${keyword==="2D Game Art" && " ring-4 outline-none ring-red-300"} font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>2D Game Art</button>
			<button type="button" onClick={onKeyword} className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br ${keyword==="8K HD" && " ring-4 outline-none ring-red-300"} font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>8K HD</button>
			<button type="button" onClick={onKeyword} className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br ${keyword==="Unreal Engine" && " ring-4 outline-none ring-red-300"} font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>Unreal Engine</button>
			<button type="button" onClick={onKeyword} className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br ${keyword==="Matte Drawing" && " ring-4 outline-none ring-red-300"} font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>Matte Drawing</button>
			<button type="button" onClick={onKeyword} className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br ${keyword==="Charcoal Drawing" && " ring-4 outline-none ring-red-300"} font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>Charcoal Drawing</button>

			<p className="font-sans font-semibold mt-3">Quality</p>
			<button type="button" onClick={onQuality} className={`text-gray-500 bg-slate-200 m-1 ${quality==="draft" && "ring-4 outline-none ring-rose-300"} font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2`}>draft</button>
			<button type="button" onClick={onQuality} className={`text-gray-500 bg-slate-200 m-1 ${quality==="normal" && "ring-4 outline-none ring-rose-300"} font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2`}>normal</button>
			
			
			<p className="font-sans font-semibold mt-3">TYPE</p>
			<button type="button" onClick={onType} className={`text-gray-500 bg-slate-200 m-1 ${type==="image" && "ring-4 outline-none ring-rose-300"} font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2`}>image</button>
			<button type="button" onClick={onType} className={`text-gray-500 bg-slate-200 m-1 ${type==="pixel art" && "ring-4 outline-none ring-rose-300"} font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2`}>pixel art</button>
			


			<p className="font-sans font-semibold mt-3">ASPECT RATIO</p>
			<button type="button" onClick={onAspect} className={`text-gray-500 bg-slate-200 m-1 ${aspect==="widescreen" && "ring-4 outline-none ring-rose-300"} font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2`}>widescreen</button>
			<button type="button" onClick={onAspect} className={`text-gray-500 bg-slate-200 m-1 ${aspect==="portrait" && "ring-4 outline-none ring-rose-300"} font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2`}>portrait</button>
			<button type="button" onClick={onAspect} className={`text-gray-500 bg-slate-200 m-1 ${aspect==="square" && "ring-4 outline-none ring-rose-300"} font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2`}>square</button>
			
			<p className="font-sans font-semibold mt-3">INITIAL IMAGE (OPTIONAL)</p>
			<div className="flex w-full mt-3 items-center justify-center bg-grey-lighter md:justify-start">
				<label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-slate-400">
					<svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
					</svg>
					<span className={`mt-2 text-base leading-normal ${file && "text-green-500"}`}>{file ? `Image is uploaded` :`Select an image`}</span>
					<input type='file' className="hidden" onChange={onUploadFile}/>
				</label>
			</div>
			
			<p className="font-sans font-semibold items-center text-slate-400">Use uploaded image as starting image.</p>
		
			<p className="font-sans font-semibold mt-3">PUBLISH</p>
			<div className="relative block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
				<input onChange={ onPublish } type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
				<label for="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
			</div>
			<p className="font-sans font-semibold items-center text-slate-400" >Publish result in gallery</p>
			<button onClick={generate} {...(token===null)&&"disabled"} className="disabled:opacity-50 mt-3 p-3  md:mt-5 md:px-5 md:w-3/12 bg-rose-500 hover:bg-rose-400 text-white text-xl font-bold py-2 px-4 border-b-4 border-rose-700 hover:border-rose-500 rounded-md">
				Generate
			</button>
		</div>
	)
}

export default Nft;