import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";

const Logo = () => {
	return (
		<Link href={"/"}>
			<h3 className="text-3xl font-semibold hover:text-blue-500 cursor-pointer duration-300">
				<Image 
				src={logo}
				alt="logo"
				width={115} // specify width
				height={115} // specify height
				className="object-contain mt-1.5"
				/>
			</h3>
		</Link>
	);
};

export default Logo;
