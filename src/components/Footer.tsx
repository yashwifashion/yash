"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Container from "./Container";
import SocialIcons from "./SocialIcons";
import payment from "@/images/payment.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="w-full bg-darkText text-slate-100">
			<Container className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
				<div className="flex flex-col gap-y-4">
					<Logo />
					<p>
					Explore our curated selection of trendy and elegant fashion pieces, designed to elevate your style and confidence.
					</p>
					<div className="flex items-center gap-x-4">
						<SocialIcons href="https://www.facebook.com/people/yashwi-fashion/100093822776283/?mibextid=ZbWKwL">
							<BsFacebook className="h-5 w-5" />
						</SocialIcons>
						<SocialIcons href="https://www.instagram.com/yashwi_fashion/">
							<BsInstagram className="h-5 w-5" />
						</SocialIcons>
					</div>
				</div>
				<div>
					<p className="text-lg">Quick Links</p>
					<ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
						<Link href="/">
							<li className="hover:text-blue-500 cursor-pointer duration-300">
								Home
							</li>
						</Link>
						<Link href="/products">
							<li className="hover:text-blue-500 cursor-pointer duration-300">
								Products
							</li>
						</Link>
						<Link href="https://wa.me/918160527353?text=I%27m%20interested%20in%20your%20product%20can%20we%20have%20a%20call%3F">
							<li className="hover:text-blue-500 cursor-pointer duration-300">
								Contact Us
							</li>
						</Link>
					</ul>
				</div>
				<Link href={"https://wa.me/918160527353?text=I%27m%20interested%20in%20your%20product%20can%20we%20have%20a%20call%3F"}>
				<div>
					<p className="text-lg mb-3">
						
						Connect with Yashwi Fashion
					
					</p>
					<Image
						src={payment}
						alt="Payment banner image"
						className="w-full h-10"
					/>
				</div>
				</Link>
			</Container>
		</div>
	);
};

export default Footer;
