import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";


function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
    </>
  );
}

export default App;
