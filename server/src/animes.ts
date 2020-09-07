import { Anime } from "./lib";
import { ObjectId } from "mongodb";
export const animes: Anime[] = [
  {
    _id: new ObjectId("507f1f77bcf86cd799439011"),
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
];
