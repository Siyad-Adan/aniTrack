require("dotenv").config();

import { connectDatabase } from "../src/database";

import { User } from "../src/lib/";
import { ObjectId } from "mongodb";

const seed = async () => {
  try {
    console.log(`[seed] : running`);

    const db = await connectDatabase();

    const users: User[] = [
      {
        _id: new ObjectId(),
        username: "Jimbo",
        animes: [
          {
            mal_id: 20,
            image:
              "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
            title: "Naruto",
            airing: false,
            synopsis:
              "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
            type: "TV",
            episodes: 220,
            rated: "PG-13",
          },
        ],
      },
      {
        _id: new ObjectId(),
        username: "Bobby",
        animes: [
          {
            mal_id: 20,
            image:
              "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
            title: "Naruto",
            airing: false,
            synopsis:
              "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
            type: "TV",
            episodes: 220,
            rated: "PG-13",
          },
        ],
      },
      {
        _id: new ObjectId(),
        username: "Ricky",
        animes: [
          {
            mal_id: 20,
            image:
              "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
            title: "Naruto",
            airing: false,
            synopsis:
              "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
            type: "TV",
            episodes: 220,
            rated: "PG-13",
          },
        ],
      },
    ];

    for (const user of users) {
      await db.users.insertOne(user);
    }

    console.log(`[seed] : success`);
  } catch (error) {
    throw new Error(`failed to seed database : ${error}`);
  }
};

seed();
