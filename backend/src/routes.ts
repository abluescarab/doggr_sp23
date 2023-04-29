import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { User } from "./db/entities/User.js";
import { ICreateUsersBody } from "./types.js";
import { Match } from "./db/entities/Match.js";

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

  // app.route<{Body: {email: string}}>({
  // 	method: "SEARCH",
  // 	url: "/users",
  // 	handler: async(request, reply) => {
  // 		const {email} = request.body;
  //
  // 		try {
  // 			const user = await request.em.findOne(User, {email});
  // 			console.log(user);
  // 			reply.send(user);
  // 		}
  // 		catch(err) {
  // 			console.error(err);
  // 			reply.status(500).send(err);
  // 		}
  // 	}
  // });

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
      return reply.status(500)
        .send({ message: err.message });
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
      reply.status(500)
        .send(err);
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
  app.delete<{ Body: { email: string } }>("/users", async (request, reply) => {
    const { email } = request.body;

    try {
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
}

export default DoggrRoutes;
