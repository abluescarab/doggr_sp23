import { EntityManager } from "@mikro-orm/postgresql";
import { Seeder } from "@mikro-orm/seeder";
import { User } from "../entities/User.js";

export class UserSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    em.create(User, {
      name: "Spot",
      email: "email@email.com",
      petType: "Dog",
    });

    em.create(User, {
      name: "Dogbert",
      email: "email2@email.com",
      petType: "Dog",
    });

    em.create(User, {
      name: "Doglord",
      email: "email3@email.com",
      petType: "Dog",
    });

    em.create(User, {
      name: "NotaDog",
      email: "email4@email.com",
      petType: "Cat",
    });

    em.create(User, {
      name: "NotaDogsFriend",
      email: "email5@email.com",
      petType: "Cat",
    });
  }
}
