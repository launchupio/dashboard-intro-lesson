import LeftNavBar from "./components/LeftNavBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="w-screen h-screen grid grid-cols-2 border-[2px] border-white overflow-y-auto">
      <LeftNavBar />
      <MainContent />
    </div>
  );
}

export default App;
