"use client";

import Image from "next/image";
import { IoMdCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const SingleProduct = ({ product }: any) => {
	const dispatch = useDispatch();

	return (
		<div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">
			<div>
				<Image
					src={product?.image}
					height={500}
					width={500}
					alt="Product image"
					className="w-full max-h-[500px] object-cover rounded-lg"
				/>
			</div>
			<div className="flex flex-col justify-center gap-y-10">
				<div className="">
					<p className="text-3xl font-semibold">{product?.title}</p>
				</div>
				<p className="text-lightText">{product?.description}</p>
				<div className="text-sm text-lightText flex flex-col">
					<span>
						Category:
						<span className="text-darkText">
							{" "}
							{product?.category}
						</span>
					</span>
				</div>
				<div
					onClick={()=> window.open("https://wa.me/918160527353?text=I%27m%20interested%20in%20your%20product%20can%20we%20have%20a%20call%3F", "_blank")}
					className="flex items-center cursor-pointer group"
				>
					<button className="bg-darkText text-slate-100 px-6 py-3 text-sm rounded-l-[5px] uppercase flex items-center border-r-[1px] border-r-slate-500">
						Buy Now
					</button>
					<span className="bg-darkText text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-blue-600 duration-300 py-3 rounded-r-[5px]">
						<IoMdCart />
					</span>
				</div>
			</div>
			<Toaster />
		</div>
	);
};

export default SingleProduct;
