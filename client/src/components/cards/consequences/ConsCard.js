import React from 'react';
import { ReactComponent as Washer } from '../../../assets/imgs/svgs/Washer.svg';

import '../index.css';
import './ConsCard.css';

const ConsCard = () => {
    return (
        <div className='consCard card'>
            <header className='cardHeader'>
                <Washer />
                <h3 className='cardTitle'>Consequence</h3>
            </header>
            <section className='cardBody'>
                <p>card body text</p>
            </section>
        </div>
    )
};

export default ConsCard;