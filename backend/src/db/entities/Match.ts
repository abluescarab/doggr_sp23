import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import { User } from "./User.js";
import type { Rel } from "@mikro-orm/core";

@Entity()
export class Match {
  @ManyToOne({ primary: true })
  owner!: Rel<User>;   // person who swiped

  @ManyToOne({ primary: true })
  matchee!: Rel<User>; // person swiped on

  @Property()
  created_at = new Date();
}
