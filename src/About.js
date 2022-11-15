import React from "react";

function About() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-lightpink to-sand">
      <img src="/wavesOpacity.svg" draggable="false" />
      <h1 className="font-playfair text-darkblue underline text-6xl text-center decoration-1 underline-offset-8 pb-4">
        about me
      </h1>
      <div className="flex flex-row items-center justify-evenly m-4">
        <img className="w-1/4" src="myself.png" />
        <div className="w-3/5 bg-cream text-darkgray rounded-2xl ">
          <p className="font-lexend p-3">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
