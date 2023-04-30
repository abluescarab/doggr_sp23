import {
  Entity,
  ManyToOne,
  PrimaryKey,
  Property
} from "@mikro-orm/core";
import type { Rel } from "@mikro-orm/core";
import { User } from "./User.js";

@Entity()
export class Message {
  @PrimaryKey()
  messageId!: number;      // auto increment unique id

  @ManyToOne()
  sender!: Rel<User>;           // user who sent the message

  @ManyToOne()
  receiver!: Rel<User>;         // user who received the message

  @Property()
  message!: string;        // message text

  @Property()
  created_at = new Date(); // when the message was sent
}
