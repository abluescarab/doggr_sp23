import {EntityManager} from "@mikro-orm/postgresql";
import {Seeder} from "@mikro-orm/seeder";
import {User} from "../entities/User.js";

export class UserSeeder extends Seeder {
	async run(em: EntityManager): Promise<void> {
		em.create(User, {
			name: "Spot",
			email: "email@email.com",
			petType: "Dog"
		});
	}
}
