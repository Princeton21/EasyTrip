import Navbar from "./Components/Navbar/Navbar";
import MainRoom from "./MainRoom/MainRoom";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/mainroom" element={<MainRoom />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
