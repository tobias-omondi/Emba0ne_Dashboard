import { Route, Routes } from "react-router-dom";
import OverViewPage from "./Pages/OverViewPage";
import AdminPage from "./Pages/AdminPage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="flex h-screen bg-gray-100 text-gray-950 overflow-hidden">
        {/* bg color */}
        <div className=" fixed inset-0 z-0">
          <div className=" absolute inset-0 bg-gradient-to-br from-slate-100 via-gray-100 opacity-80" />
            <div className=" absolute inset-0 backdrop-blur-sm" />       
        </div>

        <SideBar />
        <Routes>
          <Route path="/" element = {<OverViewPage/>} />
          <Route path="/admin" element = {<AdminPage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
