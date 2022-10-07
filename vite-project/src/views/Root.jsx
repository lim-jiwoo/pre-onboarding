import React from 'react'

function Root() {

    const goToAbout = () => {
        history.pushState({}, '', '/about')
        const popStateEvent = new PopStateEvent("popstate");
        window.dispatchEvent(popStateEvent);
    }

    return (
        <div>
            <h1>root</h1>
            <button onClick={goToAbout}>about</button>
        </div>
    )
}

export default Root