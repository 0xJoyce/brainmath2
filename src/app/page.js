import HomePageButton from "@/components/ButtonHomePage";

export default async function HomePage() {
  let date = new Date().toLocaleDateString();

  return (
    <div className="bg-cyan-100 h-screen overflow-auto flex items-center justify-center">
      <div>
        <h1 className="text-6xl">⛳</h1>
        <h1 className="text-3xl font-bold py-3">Math Golf</h1>
        <h1 className="text-base font-bold">Like golf, but math.</h1>
        <div className="text-base my-8">
          <h1>Solve math puzzles in as few steps as possible.</h1>
          <h1>You get 3 rounds to get your best score!</h1>

          <h1>Like a country club for people who like math (kinda...).</h1>
        </div>

        <HomePageButton />
        <h1 className="text-base my-8">A new game every day.</h1>
        <h1>Today is {date}.</h1>
      </div>
    </div>
  );
}
