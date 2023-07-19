import React from 'react';
import  WasherSVG from '../../../assets/imgs/svgs/svgs.jsx';


import '../index.css';
import './RewardCard.css';

const RewardCard = () => {
     return (
        <div className='RewardCard card'>
            <header className='cardHeader'>
                <WasherSVG />
                <h3 className='cardTitle'>Reward</h3>
            </header>
            <section className='cardBody'>
                <p>card body text</p>
            </section>
        </div>
    )
};

export default RewardCard;