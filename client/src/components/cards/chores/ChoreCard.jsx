import React from 'react';
import { ReactComponent as Washer } from '../../../assets/imgs/svgs/washer.svg';
import { ReactComponent as Menu } from '../../../assets/imgs/svgs/menu.svg';
import CardDD from '../../cardDropDown/CardDD';
import '../index.css';
import './ChoreCard.css';

const ChoreCard = () => {
    return (
        <div className='choreCard card'>
            <header className='cardHeader'>
                 <Washer />
                <h3 className='cardTitle'>Laundry</h3>
                <Menu />
            </header>
            <section className='cardBody'>
            <CardDD/>
                
            </section>
        </div>
    )
};

export default ChoreCard;