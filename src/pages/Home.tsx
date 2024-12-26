import HomeLeft from "../components/home/HomeLeft";
import HomeRight from "../components/home/HomeRight";
export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <HomeLeft />
        <HomeRight />
      </main>
    </>
  );
}