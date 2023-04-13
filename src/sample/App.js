import MainContent from "../components/MainContent";
import LeftNavBar from "./components/LeftNavBar";

function App() {
  return (
    <div className="flex flex-row w-full h-screen">
      <LeftNavBar />
      <MainContent />
    </div>
  );
}

export default App;
