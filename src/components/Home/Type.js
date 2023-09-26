import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          `Sr FullStack Developer, Ten years working Up-to-Date with Javascript.
          Actually Cloud Developer with Azure & AWS.
          `,
          "React.js & Node.js",
          "Next.js & Nestjs",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}

export default Type;
