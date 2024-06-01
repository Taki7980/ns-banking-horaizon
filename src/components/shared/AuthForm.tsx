"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { AuthFormProps } from "@/types";

const formSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

const AuthForm = ({ type }: AuthFormProps) => {
	const [user, setUser] = useState(null);

	const form = useForm<z.infer<typeof authFormSchema>>({
		resolver: zodResolver(authFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof authFormSchema>) {
		console.log(values);
	}

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
							<Button type="submit">Submit</Button>
						</form>
					</Form>
				</>
			)}
		</section>
	);
};

export default AuthForm;
