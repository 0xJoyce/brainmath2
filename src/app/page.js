import { createClient } from "@supabase/supabase-js";
import HomePageButton from "@/components/ButtonHomePage";

//Must use exactly "getData()" "
async function getData() {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );

  // const gameParameters = await supabase
  //   .from("game_parameter")
  //   .select("*");

  const { data, error } = await supabase.from("game_parameter").select("*"); //Chris:  how do i prevent cacheing.  I used ctrl+shirt+r

  if (error) {
    console.error("Error: ", error);
  } else {
    console.log(data);
    return data;
  }

  // console.log(gameParameters.data);
  // return gameParameters.data;
}

export default async function HomePage() {
  const data = await getData();

  let date = new Date().toLocaleDateString();

  return (
    <div className="bg-cyan-100 h-screen overflow-auto flex items-center justify-center">
      <div>
        <h1 className="text-6xl">⛳</h1>
        <h1 className="text-3xl font-bold py-3">Math Par-Tee</h1>
        <h1 className="text-base font-bold">Like golf, but math.</h1>
        <div className="text-base my-8">
          <h1>Get to the Winning Number in as few steps as possible.</h1>
          <h1>You figure out what the operators do.</h1>
          <h1>You get 3 rounds to get your best score!</h1>
          <h1>A new game every day.</h1>
          <div>
            {data &&
              data.map((item, index) => (
                <h1
                  key={index}
                >{`id: ${item.id}, win_num: ${item.win_num}, start_num: ${item.start_num}`}</h1>
              ))}
          </div>
        </div>

        <HomePageButton />

        <h1 className="text-base my-8">Today is {date}.</h1>
      </div>
    </div>
  );
}
