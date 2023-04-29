import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import { User } from "./User.js";

@Entity()
export class Match {
  @ManyToOne({ primary: true })
  owner!: User;   // person who swiped

  @ManyToOne({ primary: true })
  matchee!: User; // person swiped on

  @Property()
  created_at = new Date();
}
