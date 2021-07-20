import React from 'react'
import Summary from "./Summary";
import AnimeList from "./AnimeList";
const Homepage:React.FC = () => {
    return (
        <div className="main-container">
            <div className="container middle">
                <Summary />
            </div>
            <div className="container right">
                <AnimeList />
            </div>
        </div>

    )
}

export default Homepage
