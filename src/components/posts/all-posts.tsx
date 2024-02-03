import { Post } from "@/interfaces/post.interface";
import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

function AllPosts({ posts }: { posts: Post[] }) {
	return (
		<section className={classes.posts}>
			<h1>All Posts</h1>
			<PostsGrid posts={posts} />
		</section>
	);
}

export default AllPosts;
