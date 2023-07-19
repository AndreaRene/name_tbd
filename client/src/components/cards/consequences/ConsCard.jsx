import React from 'react';
import  WasherSVG from '../../../assets/imgs/svgs/svgs.jsx';


import '../index.css';
import './ConsCard.css';

const ConsCard = () => {
    return (
        <div className='consCard card'>
            <header className='cardHeader'>
                <WasherSVG />
                <h3 className='cardTitle'>Consequence</h3>
            </header>
            <section className='cardBody'>
                <p>card body text</p>
            </section>
        </div>
    )
};

export default ConsCard;