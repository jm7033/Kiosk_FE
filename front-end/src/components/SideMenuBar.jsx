import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../scss/components/SideMenuBar.scss';
import { categories } from '../components/common';
import { BiHomeAlt } from "react-icons/bi";

const Category = styled(NavLink)`
    
    width : 150px;
    height : 120px;

	cursor: pointer;

	text-decoration: none;
    text-align : center;
    justify-content : center;
    align-items : center;

    padding-top: 60px;
    margin-top : 50px;
    
    -webkit-tap-highlight-color: transparent;

    color : rgb(85, 48, 0);

    &.active {
        background: rgb(197, 162, 115);
        &:hover{
            color: rgb(177, 104, 8);
        }
    }
`;

const SideMenuBar = () => {

    const navigate = useNavigate();

    return (
        <div className='SideMenuBar_Container'>
            {categories.map(category => (
                <Category
                 key = {category.id} 
                 className={({isActive}) => (isActive ? 'active' : undefined)}
                 to = {category.name === '전체' ? '/menu/' : `/menu/${category.name}/`}
                >
                    {category.name}
                </Category>
            ))}
            <button 
                className='SideMenuBar_btn'
                onClick={() => navigate('/')}    
            >
                <BiHomeAlt size={70}/>
                처음으로
            </button>
        </div>
    );
};

export default SideMenuBar;