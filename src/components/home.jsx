import React from 'react'
import ImageDisplay from './imageDisplay';
import Login from './login';
import NavBar from './navBar';
import Nft from './nftGenerator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Gallary from './gallary';


function Home() {
	return (
		<div>
			<NavBar></NavBar>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover />
			<div className="flex flex-col place-items-center mt-6  ">
				<div className="font-sans text-3xl tracking-wide font-medium m-1">Text2Art</div>
				<div className="text-gray-600 font-sans text-base tracking-wide font-medium m-3">Generate art from text with AI</div>
				<ImageDisplay ></ImageDisplay>
				<Login></Login>
				<Nft ></Nft>
				<Gallary></Gallary>
			</div>
		</div>
	)
}

export default Home;