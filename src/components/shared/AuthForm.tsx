"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";
import { AuthFormProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomInput from "./CustomInput";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.action";

const AuthForm = ({ type }: AuthFormProps) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const formSchema = authFormSchema(type);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		setIsLoading(true);
		try {
			// signup with appwrite and create plain link

			if (type === "sign-up") {
				const newUser = await signUp(data);
				setUser(newUser);
			}
			// signin with appwrite
			if (type === "sign-in") {
				const response = await signIn({
					email: data.email,
					password: data.password,
				});

				if(response) router.push('/')
			}
		} catch (error: any) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
		console.log(data);
	};

	return (
		<section className="auth-form">
			<header className="flex flex-col gap-5 md:gap-8">
				<Link
					href={"/"}
					className="cursor-pointer flex self-center items-center gap-1 "
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
				<div className="flex flex-col gap-1 md:gap-3">
					<h1 className="text-24 font-semibold lg:text-36 text-gray-900">
						{user
							? "Link account"
							: type === "sign-in"
							? "Sign In"
							: "Sign Up"}
						<p className="text-16 font-normal text-gray-600">
							{user
								? "Link your account to continue"
								: "Please Enter your details"}
						</p>
					</h1>
				</div>
			</header>
			{user ? (
				<div className="flex flex-col gap-4">
					{/* plade component here */}
				</div>
			) : (
				<>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8"
						>
							{type === "sign-up" && (
								<>
									<div className="flex gap-4">
										<CustomInput
											form={form.control}
											name="firstName"
											label="First Name"
											type="text"
										/>
										<CustomInput
											form={form.control}
											name="lastName"
											label="Last Name"
											type="text"
										/>
									</div>
									<CustomInput
										form={form.control}
										name="address1"
										label="Address"
										type="text"
									/>
									<CustomInput
										form={form.control}
										name="city"
										label="City"
										type="text"
									/>
									<div className="flex gap-4">
										<CustomInput
											form={form.control}
											name="state"
											label="State"
											type="text"
										/>
										<CustomInput
											form={form.control}
											name="postalCode"
											label="Postal Code"
											type="text"
										/>
									</div>
									<div className="flex gap-4">
										<CustomInput
											form={form.control}
											name="dateOfBirth"
											label="Date of Birth"
											type="text"
										/>
										<CustomInput
											form={form.control}
											name="ssn"
											label="SSN"
											type="text"
										/>
									</div>
								</>
							)}
							<CustomInput
								form={form.control}
								name="email"
								label="Email"
								type="email"
							/>
							<CustomInput
								form={form.control}
								name="password"
								label="Password"
								type="password"
							/>
							<div className="flex flex-col gap-4">
								<Button
									type="submit"
									disabled={isLoading}
									className="form-btn"
								>
									{isLoading ? (
										<>
											<Loader2
												size={20}
												className="animate-spin"
											/>{" "}
											&nbsp;Loading..
										</>
									) : type === "sign-in" ? (
										"Sign In"
									) : (
										"Sign Up"
									)}
								</Button>
							</div>
						</form>
					</Form>
					<footer className="flex justify-center gap-1">
						<p className="text-14 font-normal">
							{type === "sign-in"
								? "Don't have an account?"
								: "Already have an account?"}
						</p>

						<Link
							href={type === "sign-in" ? "/sign-up" : "/sign-in"}
							className=" text-gray-900 hover:text-blue-700 form-link"
						>
							{type === "sign-in" ? "Sign Up" : "Sign In"}
						</Link>
					</footer>
				</>
			)}
		</section>
	);
};

export default AuthForm;
