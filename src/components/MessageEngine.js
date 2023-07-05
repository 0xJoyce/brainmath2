"use client";
import { useGame } from "./ContextProvider";
import MessageEngineButton from "./ButtonMessageEngine";
import { useState, useEffect } from "react";

export default function MessageEngine() {
  const { roundNum } = useGame();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // this will delay the rendering of the component by .5 second

    // This function will run when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const message = [
    "Ready for Round 1?",
    "Can you do it in fewer steps?  Let's try again.",
    "You're doing great.  Let's make this third try your best one!",
    "How did you do?",
  ];

  if (!isLoaded) {
    return null; // or return a loading spinner, or any placeholder component
  }

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-screen overflow-auto flex items-center justify-center">
      <div>
        <h1 className="mb-10 text-3xl">{message[roundNum]}</h1>

        <MessageEngineButton />
      </div>
    </div>
  );
}

//############################

// import { useGame } from "./ContextProvider";
// import MessageEngineButton from "./ButtonMessageEngine";

// export default function MessageEngine() {
//   const { roundNum } = useGame();

//   const message = [
//     "Ready for Round 1?",
//     "Can you do it in fewer steps?  Let's try again.",
//     "You're doing great.  Let's make this third try your best one!",
//     "How did you do?",
//   ];
//   return (
//     <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-screen overflow-auto flex items-center justify-center">
//       <div>
//         <h1 className="mb-10 text-3xl">{message[roundNum]}</h1>

//         <MessageEngineButton />
//       </div>
//     </div>
//   );
// }
