import React from 'react';
import  VideoGameSVG from '../../../assets/imgs/svgs/svgs.js';


import '../index.css';
import './RewardCard.css';

const RewardCard = () => {
     return (
        <div className='RewardCard card'>
            <header className='cardHeader'>
                <VideoGameSVG />
                <h3 className='cardTitle'>1 Hour Electronics Time</h3>
            </header>
            <section className='cardBody'>
                <p>Great job getting your chore done! Enjoy your electronic time!</p>
            </section>
        </div>
    )
};

export default RewardCard;