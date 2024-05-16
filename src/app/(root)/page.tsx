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
						title="Welcome to the Horaizon App"
						user={loggedIn?.firstName || "Guest"}
						subtext="Manage your personal/public accounts and transactions safely & securely."
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
