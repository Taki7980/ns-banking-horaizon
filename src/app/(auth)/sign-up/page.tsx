import AuthForm from "@/components/shared/AuthForm";
import React from "react";

const signUp = () => {
	return (
		<section className="flex-center size-full max-sm:px-6">
			<AuthForm type="sign-up" />
		</section>
	);
};

export default signUp;
