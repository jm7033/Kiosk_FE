import React from 'react';
import '../scss/pages/CheckPage.scss';

const CheckPage = ({receipt, setReceipt, cart, setCart}) => {

    const datas = receipt.menu === undefined ? cart : receipt.menu;

    const calculateTotalPrice = () => {
        let result = 0;
        for(let i = 0; i < datas.length; i++) {
            result += datas[i].price * datas[i].count;
        }
        return result;
    }

    return (
        <div className='CheckPage_Container'>
            {console.log(datas)}
            {/* Text */}
            <div className='CheckPage_Text'>주문을 확인해주세요</div>
            {/* Menu */}
            <div className='CheckPage_Wrapper'>
                {datas.map(data => 
                <div key={data.id} className='CheckPage_Items'>
                    <div><img src={data.url} alt='' className='Items_img'/></div>
                    <div>
                        <div className='Items_Menu_Text'>{data.name}</div>
                        <div>{data.option}</div>
                    </div>
                    <div>
                        <div onClick={data => (data.count - 1)} className="countbutton">-</div>
                        <div style={{marginLeft:'40px', marginRight:'40px', fontSize: '30px'}}>{data.count}</div>
                        <div onClick={data => data.count +1} className="countbutton">+</div>
                    </div>
                </div>
            )}
            </div>
            {/* Price */}
            <div>
                {calculateTotalPrice(datas)}
            </div>
        </div>
    );
};

export default CheckPage;