import AllPosts from "@/components/posts/all-posts";
import { Post } from "@/interfaces/post.interface";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";

function AllPostsPage({ posts }: { posts: Post[] }) {
	return (
		<>
			<Head>
				<title>All Posts</title>
				<meta
					name="description"
					content="A list of all programming-related tutorials and posts!"
				/>
			</Head>
			<AllPosts posts={posts} />;
		</>
	);
}

export function getStaticProps() {
	const allPosts = getAllPosts();
	return {
		props: {
			posts: allPosts,
		},
	};
}

export default AllPostsPage;
