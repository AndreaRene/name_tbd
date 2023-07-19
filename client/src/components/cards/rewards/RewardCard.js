import React from 'react';
import { ReactComponent as Washer } from '../../../assets/imgs/svgs/Washer.svg';

import '../index.css';
import './RewardCard.css';

const RewardCard = () => {
     return (
        <div className='RewardCard card'>
            <header className='cardHeader'>
                <Washer />
                <h3 className='cardTitle'>Reward</h3>
            </header>
            <section className='cardBody'>
                <p>card body text</p>
            </section>
        </div>
    )
};

export default RewardCard;