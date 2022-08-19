import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Theme from "./components/Theme";
import { useSelector, useDispatch } from "react-redux";
import CommandLine from "./components/CommandLine";
import { setIsTheme } from "./store/actions";

function App() {
    const {
        toggle: { isCmdLine, isTheme },
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isTheme) {
            if (isCmdLine) {
                dispatch(setIsTheme(false))
                console.log('close theme');
            }
        }
    }, [isCmdLine])

    return (
        <div className="App">
            <div className="container">
                <BrowserRouter>
                    <Navbar />
                    <Theme isTheme={isTheme} />
                    {isCmdLine && <CommandLine />}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
