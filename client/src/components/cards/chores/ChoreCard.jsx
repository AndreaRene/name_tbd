import React from 'react';
import { ReactComponent as Washer } from '../../../assets/imgs/svgs/Washer.svg';

import '../index.css';
import './ChoreCard.css';

const ChoreCard = () => {
    return (
        <div className='choreCard card'>
            <header className='cardHeader'>
                <Washer />
                <h3 className='cardTitle'>Chore</h3>
            </header>
            <section className='cardBody'>
                <p>card body text</p>
            </section>
        </div>
    )
};

export default ChoreCard;