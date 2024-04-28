import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className=" grid 2xl:grid-cols-[270px_minmax(auto,_1fr)] xl:grid-cols-[270px_minmax(auto,_1fr)] lg:grid-cols-[270px_minmax(auto,_1fr)] md:grid-cols-[230px_minmax(auto,_1fr)] sm:grid-cols-[200px_minmax(auto,_1fr)] ">
        <Sidebar />
        <Navbar />
      </div>
    </>
  );
}

export default App;
