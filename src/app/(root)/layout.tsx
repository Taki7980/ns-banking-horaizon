import MobileNavbar from "@/components/shared/MobileNavbar";
import Sidebar from "@/components/shared/Sidebar";
import Image from "next/image";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const loggedIn = { firstName: "Nirjhar", lastName: "Sarkar" };
	return (
		<main className="flex h-screen w-full font-inter">
			<Sidebar user={loggedIn} />
			<div className="flex flex-col size-full">
				<div className="root-layout">
					<Image
						src="/icons/logo.svg"
						alt="logo"
						width={30}
						height={30}
					/>
					<div className="">
						<MobileNavbar user={loggedIn} />
					</div>
				</div>
				{children}
			</div>
		</main>
	);
}
