import Header from "@/components/shared/Header";
import TotalBalanceBox from "@/components/shared/TotalBalanceBox";
import React from "react";

const Home = () => {
	const loggedIn = { firstName: "John", lastName: "sarkar" };

	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<Header
						type="greeting"
						title="hello"
						user={loggedIn?.firstName || "Guest"}
						subtext="heloow world"
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1298.35}
					/>
				</header>
			</div>
		</section>
	);
};

export default Home;
