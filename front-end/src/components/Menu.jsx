import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../components/common';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import '../scss/components/Menu.scss';

const Menu = ({cart, setCart}) => {
    const [isActive, setIsActive] = useState(false);
    const [modalData, setModalData] = useState(null);
    // 카테고리 별로 메뉴를 보여주기 위해
    // URL 파라미터를 받아와, 배열 내장 함수인 filter를 이용해.
    // 사용자가 선택한 카테고리에 알맞는 메뉴들을 새로운 배열 객체에 담아냄.
    const params = useParams();
    const datas = params.category === undefined ? items : items.filter(item => item.type === params.category);

    const navigate = useNavigate();

    const onClick = () => {
        navigate('/check');
    }
    const calculateCount = (cart) => {
        let result = 0;
        for(let i = 0; i < cart.length; i++){
            result += cart[i].count;
        }
        return result;
    }

    const calculatePrice = (cart) => {
        let result = 0;
        for(let i = 0; i < cart.length; i++) {
            result += (cart[i].price * cart[i].count);
        }
        return result;
    }

    return (
        <div className='Menu_Container'>
            <div className='Menu_Wrapper'>
            { datas.map(data =>
                    <div key = {data.id} className='Menu_item' onClick={()=> {setIsActive(!isActive); setModalData(data);}}>
                        <img src={data.url} alt='' className='img'/>
                        <div className='text'>
                            {data.name}
                            <br/>
                            {data.price}원
                        </div>
                        { isActive && <Modal closeModal={()=>setIsActive(!isActive)} data={modalData} cart={cart} setCart={setCart}/>}
                    </div>
              )}
            </div>
            <div className='TotalPrice_Container'>
                <div className='TotalPrice_Wrapper'>
                    <div className='TotalPrice_Component'>
                        <div className='TotalPrice_Component_Text'>주문할 메뉴</div>
                        <div className='TotalPrice_Component_CountText'>{calculateCount(cart)}</div>
                    </div>
                    <div className='TotalPrice_Component'>
                        <div className='TotalPrice_Component_Text'>총 금액</div>
                        <div>{calculatePrice(cart)}원</div>
                    </div>
                </div>
                <button onClick={onClick} className='TotalPrice_Btn'>결제하기</button>
            </div>
        </div>
    );
};

export default Menu;