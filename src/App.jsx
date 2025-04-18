// import ParticlesComponent from "./components/ParticlesComponent";

import ParticlesComponent from "./components/particles.jsx";
import SpiderCursor from "./components/Spidercursor.jsx";

function App() {
  return (
    <div className="App">
      <ParticlesComponent />
      <h1 className="relative z-10 text-center items-center text-white">
        Hello World
      </h1>
      <SpiderCursor />
    </div>
  );
}

export default App;
