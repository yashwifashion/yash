"use client";
import Link from "next/link";
import Image from "next/image";
import { ItemProps } from "../../types";
import { useDispatch } from "react-redux";
import { IoIosStar } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const ProductsData = ({ item }: ItemProps) => {
	const dispatch = useDispatch();

	const starArray = Array.from({ length: item?.rating }, (_, i) => (
		<span key={i} className="text-yellow-400">
			<IoIosStar />
		</span>
	));

	return (
		<div className="w-full rounded-lg overflow-hidden">
			<Link href={{ pathname: "/product", query: { _id: item?._id } }}>
				<div className="w-full h-72 group overflow-hidden relative">
					<Image
						src={item?.image}
						width={500}
						height={500}
						alt="Product Image"
						className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 rounded-t-lg"
					/>
					{item.isNew && (
						<span className="absolute top-2 right-2 font-semibold text-xs py-1 px-3 rounded-full bg-white duration-300 group-hover:bg-blue-500 transition-all group-hover:text-white">
							New Arrival
						</span>
					)}
				</div>
			</Link>
			<div className="border border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
				<p className="font-medium">{item?.title}</p>
				<div className="flex items-center justify-between">
				</div>
				<div className="flex items-center justify-between">
					<button
						onClick={()=> window.open("https://wa.me/918160527353?text=I%27m%20interested%20in%20your%20product%20can%20we%20have%20a%20call%3F", "_blank")}
						className="bg-blue-500 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-blue-700 hover:text-white duration-300"
					>
						Buy Now
					</button>
					<div className="flex items-center gap-x-1">{starArray}</div>
				</div>
			</div>
			<Toaster />
		</div>
	);
};

export default ProductsData;
