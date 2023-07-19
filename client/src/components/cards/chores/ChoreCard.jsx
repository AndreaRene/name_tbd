import React from 'react';
import  WasherSVG from '../../../assets/imgs/svgs/svgs.jsx';

import '../index.css';
import './ChoreCard.css';

const ChoreCard = () => {
    return (
        <div className='choreCard card'>
            <header className='cardHeader'>
                <WasherSVG />
                <h3 className='cardTitle'>Chore</h3>
            </header>
            <section className='cardBody'>
                <p>card body text</p>
            </section>
        </div>
    )
};

export default ChoreCard;