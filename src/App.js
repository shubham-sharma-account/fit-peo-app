import Dashboard from "./Dashboard";
import Event from "./Event";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App bg-gray-200 h-screen flex items-center justify-center">
      <div className="bg-white h-[96%] w-[98%] m-auto rounded-3xl shadow-lg diplay flex py-3 px-3">
        <Sidebar />
        <Dashboard /> 
        <Event />
      </div>
    </div>
  );
}

export default App;
