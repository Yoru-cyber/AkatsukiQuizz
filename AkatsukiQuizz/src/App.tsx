import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Quizz from "./pages/Quizz";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quizz" element={<Quizz />}/>
          <Route path="/quizz/question/:questionId" element={<Quizz />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
