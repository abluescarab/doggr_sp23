import type { Dictionary, EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { Message } from "../entities/Message.js";

export class MessageSeeder extends Seeder {
	async run(em: EntityManager, context: Dictionary): Promise<void> {
		const msgRepo = em.getRepository(Message);

		// https://mikro-orm.io/docs/seeding#shared-context

		em.create(Message, {
			sender: context.user1,
			receiver: context.user2,
			message: "*bark*",
		});

		em.create(Message, {
			sender: context.user1,
			receiver: context.user2,
			message: "*bark bark*",
		});

		em.create(Message, {
			sender: context.user1,
			receiver: context.user2,
			message: "plz reply",
		});

		em.create(Message, {
			sender: context.user2,
			receiver: context.user1,
			message: "please stop",
		});

		em.create(Message, {
			sender: context.user4,
			receiver: context.user5,
			message: "Help, I'm surrounded by dogs",
		});
	}
}
