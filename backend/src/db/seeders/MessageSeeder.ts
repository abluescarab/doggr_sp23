import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Message } from "../entities/Message.js";

export class MessageSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    em.create(Message, {
      sender: 1,
      receiver: 2,
      message: "*bark*"
    });

    em.create(Message, {
      sender: 1,
      receiver: 2,
      message: "*bark bark*"
    });

    em.create(Message, {
      sender: 1,
      receiver: 2,
      message: "plz reply"
    });

    em.create(Message, {
      sender: 2,
      receiver: 1,
      message: "please stop"
    });

    em.create(Message, {
      sender: 4,
      receiver: 5,
      message: "Help, I'm surrounded by dogs"
    });
  }
}
