import { React, useState } from 'react';
import { ReactComponent as Washer } from '../../../assets/imgs/svgs/washer.svg';
import { ReactComponent as Menu } from '../../../assets/imgs/svgs/menu.svg';
import CardDD from '../../cardDropDown/CardDD';
import '../index.css';
import './ChoreCard.css';



const ChoreCard = () => {

    const [toggle, setToggle] = useState(true);

const handleClick = () => {
    setToggle(!toggle);
};
    return (
        <div className='choreCard card'>
            <header className='cardHeader'>
                <Washer />
                <h3 className='cardTitle'>Laundry</h3>
                <Menu onClick={handleClick}/>
            </header>
                <section className={`cardBody ${toggle ? '' : 'slide'}`}>
                <CardDD />  
            </section>            
        </div>
    )
};

export default ChoreCard;




// {`navClick ${activePage === 'about' ? 'active' : ''}`}