import Header from "@/components/shared/Header";
import RightSidebar from "@/components/shared/RightSidebar";
import TotalBalanceBox from "@/components/shared/TotalBalanceBox";
import React from "react";

const Home = () => {
	const loggedIn = { firstName: "Nirjhar", lastName: "sarkar",email:"XXXXXXXXXXXXXXXXX", };

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
				RECENT TRANSACTIONS
			</div>
			<RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 1456.50},{currentBalance: 16.50}]} />
		</section>
	);
};

export default Home;
