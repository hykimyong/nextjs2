import { collections } from "@/util/database";
import Game from "@/models/game";

export default async function Home() {
  const games = await collections.games?.find().toArray();
  // const games = (await collections.games?.find({}).toArray()) as Game[];
  
  console.log(games);

  return (
    <div>
      안녕
    </div>
  );
}
