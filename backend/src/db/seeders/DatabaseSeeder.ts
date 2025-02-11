import { Seeder } from "@mikro-orm/seeder";
import { EntityManager } from "@mikro-orm/postgresql";
import { UserSeeder } from "./UserSeeder.js";
import { MessageSeeder } from "./MessageSeeder.js";

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    return this.call(em, [UserSeeder, MessageSeeder]);
  }
}
