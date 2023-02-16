import React from "react"

import MainPhoto from "./MainPhoto"
import Info from "./Info"
import Footer from "./Footer"

export default function Card() {
    return (
        <div className="background-card">
            <MainPhoto />
            <Info />
            <Footer />
        </div>
    )
}

