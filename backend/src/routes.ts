import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { User } from "./db/entities/User.js";
import { ICreateUsersBody } from "./types.js";
import { Match } from "./db/entities/Match.js";
import { Message } from "./db/entities/Message.js";
import { hasBadWord } from "./filter.js";

async function DoggrRoutes(app: FastifyInstance, _options = {}) {
  if(!app) {
    throw new Error("Fastify instance has no value during routes construction");
  }

  app.get('/hello', async (request: FastifyRequest, reply: FastifyReply) => {
    return 'hello';
  });

  app.get("/dbTest", async (request: FastifyRequest, reply: FastifyReply) => {
    return request.em.find(User, {});
  });

  // new user
  app.post<{
    Body: ICreateUsersBody
  }>("/users", async (request, reply: FastifyReply) => {
    const { name, email, petType } = request.body;

    try {
      const user = await request.em.create(User, {
        name,
        email,
        petType
      });

      await request.em.flush();

      console.log("Created new user: ", user);
      return reply.send(user);
    }
    catch(err) {
      console.log("Failed to create new user: ", err.message);
      return reply.status(500).send({ message: err.message });
    }
  });

  // read
  app.search("/users", async (request, reply: FastifyReply) => {
    const { email } = request.body;

    try {
      const user = await request.em.findOne(User, { email });
      console.log(user);
      reply.send(user);
    }
    catch(err) {
      console.error(err);
      reply.status(500).send(err);
    }
  });

  // update
  app.put<{ Body: ICreateUsersBody }>("/users", async (request, reply) => {
    const { name, email, petType } = request.body;

    const user = await request.em.findOne(User, { email });
    user.name = name;
    user.petType = petType;

    // persist object changes to database
    await request.em.flush();
    console.log(user);
    reply.send(user);
  });

  // delete
  app.delete<{
    Body: { email: string, password: string }
  }>("/users", async (request, reply) => {
    const { email, password } = request.body;

    try {
      if(password != process.env.ADMIN_PASS) {
        console.error("Failed to delete user: Invalid admin password");
        reply.status(401).send("Failed to delete user: Invalid admin password");
      }

      const user = await request.em.findOne(User, { email });

      await request.em.remove(user).flush();
      console.log(user);
      reply.send(user);
    }
    catch(err) {
      console.error(err);
      reply.status(500).send(err);
    }
  });

  // add match
  app.post<{
    Body: { email: string, matchee_email: string }
  }>("/match", async (request, reply) => {
    const { email, matchee_email } = request.body;

    try {
      const matchee = await request.em.findOne(User, { email: matchee_email });
      const owner = await request.em.findOne(User, { email });
      const match = await request.em.create(Match, { owner, matchee });

      await request.em.flush();
      console.log(match);
      return reply.send(match);
    }
    catch(err) {
      console.error(err);
      return reply.status(500).send(err);
    }
  });

  //----------------------------------------------------------------------------
  // Message Functionality
  // read *all* messages
  app.get("/messageTest", async (request, reply) => {
    return request.em.find(Message, {});
  });

  // read all received messages
  app.search<{
    Body: { receiver: string }
  }>("/messages", async (request, reply) => {
    const { receiver } = request.body;

    try {
      const theReceiver = await request.em.findOne(User, { email: receiver });
      const messages = await request.em.find(Message, { receiver: theReceiver });
      console.log(messages);
      reply.send(messages);
    }
    catch(err) {
      console.error(err);
      reply.status(500).send(err);
    }
  });

  // read all sent messages
  app.search<{
    Body: { sender: string }
  }>("/messages/sent", async (request, reply) => {
    const { sender } = request.body;

    try {
      const theSender = await request.em.findOne(User, { email: sender });
      const messages = await request.em.find(Message, { sender: theSender });
      console.log(messages);
      reply.send(messages);
    }
    catch(err) {
      console.error(err);
      reply.status(500).send(err);
    }
  });

  // create message
  app.post<{
    Body: { sender: string, receiver: string, message: string }
  }>("/messages", async (request, reply) => {
    const { sender, receiver, message } = request.body;

    try {
      if(hasBadWord(message)) {
        const err = "Failed to create new message: Inappropriate language in message";
        console.log(err);
        return reply.status(500).send({ message: err });
      }

      const theSender = await request.em.findOne(User, { email: sender });
      const theReceiver = await request.em.findOne(User, { email: receiver });
      const newMessage = await request.em.create(Message, {
        sender: theSender,
        receiver: theReceiver,
        message
      });

      await request.em.flush();
      console.log(newMessage);
      return reply.send(newMessage);
    }
    catch(err) {
      console.log("Failed to create new message: ", err.message);
      return reply.status(500).send({ message: err.message });
    }
  });

  // update message
  app.put<{
    Body: { messageId: number, message: string }
  }>("/messages", async (request, reply) => {
    const { messageId, message } = request.body;

    const theMessage = await request.em.findOne(Message, { messageId: messageId });
    theMessage.message = message;

    // persist object changes to database
    await request.em.flush();
    console.log(theMessage);
    reply.send(theMessage);
  });

  // delete message
  app.delete<{
    Body: { messageId: number }
  }>("/messages", async (request, reply) => {
    const { messageId } = request.body;

    try {
      const message = await request.em.findOne(Message, { messageId });

      await request.em.remove(message).flush();
      console.log(message);
      reply.send(message);
    }
    catch(err) {
      console.error(err);
      reply.status(500).send(err);
    }
  });

  // delete all messages
  app.delete<{
    Body: { sender: string }
  }>("/messages/all", async (request, reply) => {
    const { sender } = request.body;

    try {
      const theSender = await request.em.findOne(User, { email: sender });
      const messages = await request.em.find(Message, { sender: theSender });

      await request.em.remove(messages).flush();
      console.log(messages);
      reply.send(messages);
    }
    catch(err) {
      console.error(err);
      reply.status(500).send(err);
    }
  });
}

export default DoggrRoutes;
