import React from 'react';
import SideMenuBar from '../components/SideMenuBar';
import Menu from '../components/Menu';
import '../scss/pages/MenuPage.scss';


const MenuPage = ({receipt, setReceipt}) => {
    return (
        <div className='MenuPage_Container'>
            <SideMenuBar />
            <Menu />
        </div>
    );
};

export default MenuPage;