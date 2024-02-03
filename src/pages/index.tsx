import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import Hero from "@/components/home-page/Hero";
import { Post } from "@/interfaces/post.interface";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";

function HomePage({ posts }: { posts: Post[] }) {
	return (
		<>
			<Head>
				<title>Mahmoud&apos;s Blog</title>
				<meta
					name="description"
					content="I post about programming and web development."
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();
	return {
		props: {
			posts: featuredPosts,
		},
	};
}

export default HomePage;
