import HomePageButton from "@/components/ButtonHomePage";

export default function HomePage() {
  let date = new Date().toLocaleDateString();

  return (
    <div className="bg-amber-300 h-screen overflow-auto flex items-center justify-center">
      <div>
        <h1 className="text-8xl">#️⃣</h1>
        <h1 className="text-3xl font-bold py-3">Magic Number Game</h1>
        <h1>
          Get 3 chances to get to the Magic Number in as few steps as possible.
        </h1>
        <HomePageButton />

        <h1>{date}</h1>
      </div>
    </div>
  );
}
