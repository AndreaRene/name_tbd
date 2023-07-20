import React from 'react';
import { ReactComponent as VideoGameSVG } from '../../../assets/imgs/svgs/videoGame.svg';

import '../index.css';
import './ChoreCard.css';

const ChoreCard = () => {
    return (
        <div className='choreCard card'>
            <header className='cardHeader'>
                <h3 className='cardTitle'>Laundry</h3>
                 <VideoGameSVG />
            </header>
            <section className='cardBody'>
                <p>Wash, fold, put away your laundry</p>
                <ul>
                    <li>There</li>
                    <li>Will</li>
                    <li>be a</li>
                    <li>checkbox</li>
                    <li>list</li>
                    <li>here</li>

                </ul>
            </section>
        </div>
    )
};

export default ChoreCard;