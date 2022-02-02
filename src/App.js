import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Message from "./components/Message";
import FirstFluid from "./components/CommonFluid";
import SecondFluid from "./components/SecondFluid";
import ThirdFluid from "./components/ThirdFluid";
import Column from "./components/Column";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/message" element={<Message />} />
          <Route path="/secondFluid" element={<SecondFluid />} />
          <Route path="/thirdFluid" element={<ThirdFluid />} />
          <Route path="/column" element={<Column />} />
          <Route path="/" element={<FirstFluid />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
