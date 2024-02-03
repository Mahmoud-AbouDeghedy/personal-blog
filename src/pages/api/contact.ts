import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

interface Message {
	email: string;
	name: string;
	message: string;
	id?: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() === ""
		) {
			res.status(422).json({ message: "Invalid input." });
			return;
		}

		const newMessage: Message = { email, name, message };

		let client;

		const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.a9cap68.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

		try {
			client = await MongoClient.connect(connectionString);
		} catch (e) {
			res.status(500).json({ message: "Could not connect to database" });
			return;
		}

		const db = client.db();
		try {
			const result = await db.collection("messages").insertOne(newMessage);
			newMessage.id = result.insertedId.toString();
		} catch (e) {
			client.close();
			res.status(500).json({ message: "Storing message failed!" });
			return;
		}

		client.close();

		res
			.status(201)
			.json({ message: "Successfully stored message!", newMessage });
	}
}

export default handler;
