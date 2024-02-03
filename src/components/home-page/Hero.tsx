import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/mahmoud.png"
					alt="An image for Mahmoud Ehab"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I&apos;m Mahmoud</h1>
			<p>I blog about Software Engineering, and Web Development..</p>
		</section>
	);
}

export default Hero;
