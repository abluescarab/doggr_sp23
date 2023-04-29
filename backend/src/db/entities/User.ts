import {
  Cascade,
  Collection,
  Entity,
  OneToMany,
  Property,
  Unique
} from "@mikro-orm/core";
import { BaseEntity } from "./BaseEntity.js";
import { Match } from "./Match.js";

@Entity({ tableName: "users" })
export class User extends BaseEntity {
  @Property()
  @Unique()
  email!: string;

  @Property()
  name!: string;

  @Property()
  petType!: string;

  @OneToMany(
    () => Match,
    match => match.owner,
    { cascade: [Cascade.PERSIST, Cascade.REMOVE] }
  )
  matches!: Collection<Match>;

  @OneToMany(
    () => Match,
    match => match.matchee,
    { cascade: [Cascade.PERSIST, Cascade.REMOVE] }
  )
  matched_by!: Collection<Match>;
}

// export const schema = new EntitySchema({
//     class: User,
//     extends: "BaseEntity",
//     properties: {
//         email: { type: "string" },
//     },
// });
