import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCoffeeTogo, BiQr, BiArrowBack } from "react-icons/bi";
import '../scss/OrderPage.scss';

const OrderPage = ({receipt, setReceipt}) => {
    const navigate = useNavigate();

    const onBtnClick = (e) => {
        e.target.name === 'Basic' ? receipt.type = 'Basic' : receipt.type = 'QR';
        console.log(e.target.name);
        receipt.type === 'Basic' ? navigate('/menu') : navigate('/check');
        console.log(receipt);
    }

    return (
        <div className='OrderPage_Container'>
            <div className='OrderPage_Back' onClick = {() => navigate('/')}>
                <BiArrowBack/>
                뒤로가기
            </div>
            <div className='OrderPage_Wrapper'>
                <button className='OrderPage_Btn' name='Basic' onClick={onBtnClick}>
                    <div name='Basic' onClick={onBtnClick}>
                        <BiCoffeeTogo size={350} />
                    </div>
                    일반 주문
                </button>
            </div>
            <div className='OrderPage_Wrapper' style={{background:'burlywood'}}>
                <button className='OrderPage_Btn' name='QR' onClick={onBtnClick}>
                    <div name='QR' onClick={onBtnClick}>
                        <BiQr size={350} />
                    </div>
                    QR 주문
                </button>
            </div>
        </div>
    );
};

export default OrderPage;