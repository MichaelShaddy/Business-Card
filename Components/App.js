import React from "react"
import MainPhoto from "./MainPhoto"
import Info from "./Info"
import Footer from "./Footer"
import ThemeToggle from "./ThemeToggle"


export default function App() {

    return (
            <div className="App">
                <div>
                    <MainPhoto />
                    <Info />
                    <Footer />
                </div>
                <div className="themetoggle">
                    <ThemeToggle />
                </div>
            </div>
    )
}

