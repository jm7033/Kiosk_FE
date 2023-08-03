import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../components/common';
import '../scss/components/Menu.scss';

const Menu = () => {

    const params = useParams();

    const datas = params.category === undefined ? items : items.filter(item => item.type === params.category)

    return (
        <div className='Menu_Container'>
            { datas.map(data =>
                <div key = {data.id} className='Menu_item'>
                    <img src={data.url} alt='' className='img'/>
                    <div className='text'>
                        {data.name}
                        <br/>
                        {data.price}원
                    </div>
                </div> 
                )}
        </div>
    );
};

export default Menu;