import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";
import NavBar from "./components/layout/NavBar/NavBar";
import About from "./pages/About";
import Error from "./pages/Error/Error";
import Home from "./pages/Home";
import Location from "./pages/Location";
import css from "./App.module.scss"

// function App() {
//     return (
//         <Router>
//             <NavBar />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/location/:id" element={<Location />} />
//             </Routes>
//             <Footer />
//         </Router>
//     );
// }
function App() {
    return (
        <main className={{css.app}}>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/location/:id" element={<Location />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </main>
    );
}
export default App;
