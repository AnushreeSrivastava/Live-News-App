import React from 'react';
import Banner from '../Banner/Banner';
import './home.css';
import TopHeadlines from '../TopHeadlines/TopHeadlines';

function Home() {
    return (
        <div className="main">
            <Banner />
            <TopHeadlines />
        </div>
    )
}

export default Home
