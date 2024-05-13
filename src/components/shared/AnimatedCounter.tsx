"use client";
import React from "react";
import CountUp from "react-countup";

interface Props {
	amount: number;
}

const AnimatedCounter: React.FC<Props> = ({ amount }) => {
	return (
		<div className="w-full">
			<CountUp
				end={amount}
				decimal=","
				prefix="$"
				duration={4}
				decimals={2}
			/>
		</div>
	);
};

export default AnimatedCounter;
