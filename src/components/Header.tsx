"use client";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { useEffect, useState } from "react";
import { BsBookmarks } from "react-icons/bs";
import { Products, StateProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { useSession, signOut } from "next-auth/react";
import { TbTarget } from "react-icons/tb";

const Header = () => {
	const dispatch = useDispatch();
	const { data: session } = useSession();
	const [totalAmount, setTotalAmount] = useState(0);
	const { productData, orderData } = useSelector(
		(state: StateProps) => state.shopping
	);

	;

	return (
		<div className="bg-bodyColor h-20 top-0 justify-between sticky z-50">
			<Container className="h-full flex items-center md:gap-x-5 justify-between">
				<Logo />
				{/* <==<<=== Login/Register ===>>==> */}
				{!session && (
					<div className="flex items-center gap-x-5 mt-4 md:mt-0">
                    {/* Navigation Links */}
					<Link className="text-darkText font-semibold py-2 md:py-0 md:px-4" href={"/"}>Home</Link>
					<Link className="text-darkText font-semibold py-2 md:py-0 md:px-4" href={"/products"}>Products</Link>
					<Link className="text-darkText font-semibold py-2 md:py-0 md:px-4" href={"https://wa.me/918160527353?text=I%27m%20interested%20in%20your%20product%20can%20we%20have%20a%20call%3F"}>Contact</Link>
                </div>
				)}
				{/* <==<<=== User Image ===>>==> */}
				{session && (
					<Image
						src={session?.user?.image as string}
						width={45}
						height={45}
						alt="User image"
						className="rounded-full object-cover"
					/>
				)}
				{/* <==<<=== Order Button ===>>==> */}
				{
					// @ts-ignore
					orderData?.order?.length > 0 && session && (
						<Link
							href={"/order"}
							className="headerDiv px-2 gap-x-1 cursor-pointer"
						>
							<BsBookmarks className="text-2xl" />
							<p className="text-sm font-semibold">Orders</p>
						</Link>
					)
				}
			</Container>
		</div>
	);
};

export default Header;
