import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css";
import { Post } from "@/interfaces/post.interface";

export default function PostItem({ post }: { post: Post }) {
	const { title, image, date, excerpt, slug } = post;

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const imagePath = `/images/posts/${slug}/${image}`;
	const linkPath = `/posts/${slug}`;

	return (
		<li className={classes.post}>
			<Link href={linkPath}>
				<div className={classes.image}>
					<Image
						src={imagePath}
						alt={title}
						width={300}
						height={200}
						layout="responsive"
					/>
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<time>{formattedDate}</time>
					<p>{excerpt}</p>
				</div>
			</Link>
		</li>
	);
}
