"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
	const data = {
		datasets: [
			{
				label: "Banks",
				data: [1234, 4567, 1284],
				backgroundColor: ["#00A3FF", "#FFD600", "#00FFA3", ],
			},
		],
		labels: ["Bank 1", "Bank 2", "Bank 3", ],
	};
	return <Doughnut data={data} />;
};

export default DoughnutChart;
