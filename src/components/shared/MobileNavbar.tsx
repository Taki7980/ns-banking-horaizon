"use client";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { MobileNavProps } from "@/types";

const MobileNavbar = ({ user }: MobileNavProps) => {
	const pathname = usePathname();
	return (
		<section className="w-full max-w-[265px]">
			<Sheet>
				<SheetTrigger>
					<Image
						src="/icons/hamburger.svg"
						alt="hamburger"
						height={30}
						width={30}
						className="cursor-pointer"
					/>
				</SheetTrigger>
				<SheetContent side={"left"} className="border-none bg-white">
					<Link
						href={"/"}
						className="cursor-pointer flex self-center items-center gap-1 px-4"
					>
						<Image
							src={"/icons/logo.svg"}
							width={34}
							height={34}
							alt="image"
						/>
						<h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
							Horaizon
						</h1>
					</Link>
					<div className="mobilenav-sheet">
						<SheetClose asChild>
							<nav className="flex h-full flex-col gap-6 pt-16 text-white">
								{sidebarLinks.map((link, index) => {
									const isActive =
										pathname === link.route ||
										pathname.startsWith(`${link.route}/`);
									return (
										<SheetClose asChild key={index}>
											<Link
												href={link.route}
												className={cn(
													"mobilenav-sheet_close w-full",
													{
														"bg-bank-gradient":
															isActive,
													}
												)}
											>
												<Image
													src={link.imgURL}
													alt="icon"
													height={20}
													width={20}
													className={cn({
														"brightness-[3] invert":
															isActive,
													})}
												/>

												<p
													className={cn(
														"text-1 font-semibold text-black-2",
														{
															"text-white":
																isActive,
														}
													)}
												>
													{link.label}
												</p>
											</Link>
										</SheetClose>
									);
								})}

								User
							</nav>
						</SheetClose>
						Footer
					</div>
				</SheetContent>
			</Sheet>
		</section>
	);
};

export default MobileNavbar;
