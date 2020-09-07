require("dotenv").config();

import { connectDatabase } from "../src/database";

import { Anime } from "../src/lib/";
import { ObjectId } from "mongodb";

const seed = async () => {
  try {
    console.log(`[seed] : running`);

    const db = await connectDatabase();

    const animes: Anime[] = [
      {
        _id: new ObjectId(),
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
      {
        _id: new ObjectId(),
        mal_id: 21,
        image:
          "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
        title: "Naruto 2",
        airing: false,
        synopsis:
          "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
        type: "TV",
        episodes: 220,
        rated: "PG-13",
      },
      {
        _id: new ObjectId(),
        mal_id: 22,
        image:
          "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
        title: "Naruto 3",
        airing: false,
        synopsis:
          "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
        type: "TV",
        episodes: 220,
        rated: "PG-13",
      },
      {
        _id: new ObjectId(),
        mal_id: 23,
        image:
          "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
        title: "Naruto 4",
        airing: false,
        synopsis:
          "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
        type: "TV",
        episodes: 220,
        rated: "PG-13",
      },
      {
        _id: new ObjectId(),
        mal_id: 24,
        image:
          "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
        title: "Naruto 5",
        airing: false,
        synopsis:
          "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
        type: "TV",
        episodes: 220,
        rated: "PG-13",
      },
    ];

    for (const anime of animes) {
      await db.animes.insertOne(anime);
    }

    console.log(`[seed] : success`);
  } catch (error) {
    throw new Error(`failed to seed database : ${error}`);
  }
};

seed();
