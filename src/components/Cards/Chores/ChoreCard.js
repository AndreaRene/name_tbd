import React from 'react';
import { ReactComponent as Washer } from './assets/Washer.svg';
import Washer from './assets/Washer.svg'
import{ WasherSVG } from '../../../assets/imgs/svgs.js';
import '../index.css';
import './assets/ChoreCard.css';



const ChoreCard = () => {
    return (
        <div className='choreCard card'>
            <header className='cardHeader'>
                <img src={Washer} />
                <h3 className='cardTitle'></h3>
            </header>
            <section className='cardBody'>
                <Washer />
                <WasherSVG />
            </section>
        </div>
)
};

export default ChoreCard;