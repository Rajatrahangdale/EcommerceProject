import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";

const App = () => {
  return (
    <div className="w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
