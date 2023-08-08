import React from 'react';
import SideMenuBar from '../components/SideMenuBar';
import Menu from '../components/Menu';
import '../scss/pages/MenuPage.scss';


const MenuPage = ({receipt, setReceipt, cart, setCart}) => {
    return (
        <div className='MenuPage_Container'>
            <SideMenuBar />
            <Menu cart={cart} setCart={setCart} />
            {console.log(cart)}
        </div>
    );
};

export default MenuPage;