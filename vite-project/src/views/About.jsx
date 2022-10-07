import React from 'react'

function About() {

    const goToRoot = () => {
        history.pushState({}, '', '/')
        const popStateEvent = new PopStateEvent("popstate");
        window.dispatchEvent(popStateEvent);
    }

    return (
        <div>
            <h1>about</h1>
            <button onClick={goToRoot}>go main</button>
        </div>
    )
}

export default About