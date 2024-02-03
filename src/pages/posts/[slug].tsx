import PostContent from "@/components/posts/post-detail/post-content";
import { Post } from "@/interfaces/post.interface";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import Head from "next/head";

function PostDetailPage({ post }: { post: Post }) {
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta name="description" content={post.excerpt} />
			</Head>
			<PostContent post={post} />;
		</>
	);
}

export function getStaticProps(context: { params: any }) {
	const { params } = context;
	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

export function getStaticPaths() {
	const postsFileNames = getPostsFiles();

	const slugs = postsFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
}

export default PostDetailPage;
