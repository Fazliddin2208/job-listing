import HeroComponent from "@/Components/Hero/HeroComponent";
import Main from "@/Components/Main";
import axios from "axios";

async function getPodcasts() {

  const apiUrl = process.env.API_URL

  const result = await axios
    .get(
      `${apiUrl}?page=1`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
} 

export default async function Home() {
  const podcasts = await getPodcasts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroComponent />
      <Main podcasts={podcasts} />
    </main>
  );
}
