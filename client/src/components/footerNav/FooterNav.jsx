import React from 'react';
import './FooterNav.css'

const FooterNav = () => {
    return (
        <footer id='pageFooter'>
            <ul className='footerNav'>
                <li className='footerNavClick'>Rewards</li>
                <li className='footerNavClick'>Chores</li>
                <li className='footerNavClick'>Consequences</li>
            </ul>
        </footer>
    )
};

export default FooterNav;