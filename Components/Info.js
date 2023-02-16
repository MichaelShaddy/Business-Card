import React from "react"


export default function Info() {
    return (
        <main className="info-main">
                <h1 className="name">Michael Shaddy</h1>
                <h3 className="job">Frontend Developer</h3>
                <a href="https://github.com/michaelshaddy" className="site" target="_blank">github.com/michaelshaddy</a>
            <div className="email-linkedin-buttons">
            <a href="mailto:michaelshaddy@hotmail.com"><button className="email-button"><img src="../Images/Iconemailicon.png"/>Email</button></a>
                <button className="linkedin-button" onClick={() => {
                    window.open("https://www.linkedin.com/in/michaelshaddy/", "mywindow")
                }}><img src="../Images/Vectorlinkedinicon.png"/>LinkedIn</button>
            </div>
            <div className="about-section">
                <h1 className="about-title">About</h1>
                <p className="about-text"> I'm a "in-the-works" self-taught web developer. I work as a manager at Dicks Sporting Good's with hopes to quickly learn code for a smooth transition into web development.</p>
            </div>
            <div className="interest-section">
                <h1 className="interest-title">Interests</h1>
                <p className="interest-text">I love to let my creative mind loose. I like technology and learning how it works. I enjoy overcoming challenges to bolster my attitude towards whatever it is i'm learning or doing.</p>
            </div>
            
        </main>
    )
}