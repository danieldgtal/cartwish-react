import React from "react";

import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProduct from "./FeaturedProduct";

const HomePage = () => {
	return (
		<div>
			<HeroSection
				title="Buy Iphone 14 Pro"
				subtitle="Experience the power of the latest iphone 14 with our most Pro camera ever."
				link="/"
				image={iphone}
			/>
			<FeaturedProduct />
			<HeroSection
				title="Build the ultimat setup"
				subtitle="You can add Studio Display and colour-matched Magic accessories to your bag after configure your mac min"
				link="/"
				image={mac}
			/>
		</div>
	);
};

export default HomePage;
