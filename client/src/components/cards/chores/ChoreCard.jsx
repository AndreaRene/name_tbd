import React from 'react';
import  WasherSVG from '../../../assets/imgs/svgs/svgs.jsx';

import '../index.css';
import './ChoreCard.css';

const ChoreCard = () => {
    return (
        <div className='choreCard card'>
            <header className='cardHeader'>
                <h3 className='cardTitle'>Wash, fold, and put away your laundry</h3>
                 <WasherSVG />
            </header>
            <section className='cardBody'>
                <p>card body text</p>
            </section>
        </div>
    )
};

export default ChoreCard;