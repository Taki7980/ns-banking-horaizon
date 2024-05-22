"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ user }: SiderbarProps) => {
	const pathname = usePathname();
	return (
		<section className="sidebar">
			<nav className="flex flex-col gap-4">
				<Link
					href={"/"}
					className="mb-12 flex cursor-pointer items-center gap-2"
				>
					<Image
						src={"/icons/logo.svg"}
						width={34}
						height={34}
						className="size-[24px] max-xl:size-14"
						alt="image"
					></Image>
					<h1 className="sidebar-logo">Horaizon</h1>
				</Link>
				{sidebarLinks.map((link, index) => {
					const isActive =
						pathname === link.route ||
						pathname.startsWith(`${link.route}/`);
					return (
						<Link
							key={index}
							href={link.route}
							className={cn("sidebar-link", {
								"bg-bank-gradient": isActive,
							})}
						>
							<div className="relative size-6">
								<Image src={link.imgURL} alt="icon" fill className={cn({"brightness-[3] invert":isActive})} />
							</div>
							<p className={cn("sidebar-label",{'!text-white':isActive})}>
								{link.label}
							</p>
						</Link>
					);
				})}
			</nav>
			
		</section>
	);
};

export default Sidebar;
