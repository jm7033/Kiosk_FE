import React from 'react';
import MenuListItem from '../components/MenuListItem';
import '../scss/MenuPage.scss';

const categories = [
    {
        name : '전체',
        id : 1,
    },
    {
        name : '커피',
        id : 2,
    },
    {
        name : '에이드',
        id : 3,
    },
    {
        name : '음료',
        id : 4,
    },
    {
        name : '차',
        id : 5,
    },
];

const items = [
    {
        id : 1,
        type : '커피',
        name : '메가리카노',
        price : 3000,
        options : {},
        count : 1,
        url : '../assets/coffee/32oz_Americano.jpeg'
    },
    {
        id : 2,
        type : '커피',
        name : '차가운 아메리카노',
        price : 2000,
        options : {},
        count : 1,
        url : '../assets/coffee/Americano_Ice.jpeg'
    },
    {
        id : 3,
        type : '커피',
        name : '뜨거운 아메리카노',
        price : 1500,
        options : {},
        count : 1,
        url : '../assets/coffee/Americano.jpeg'
    },
    {
        id : 4,
        type : '커피',
        name : '차가운 카페라떼',
        price : 2900,
        options : {},
        count : 1,
        url : '../assets/coffee/Caffe_Latte_Ice.jpeg'
    },
    {
        id : 5,
        type : '커피',
        name : '뜨거운 카페라떼',
        price : 2900,
        options : {},
        count : 1,
        url : '../assets/coffee/Caffe_Latte.jpeg'
    },
    {
        id : 6,
        type : '커피',
        name : '차가운 카페모카',
        price : 3900,
        options : {},
        count : 1,
        url : '../assets/coffee/Caffe_Mocha_Ice.jpeg'
    },
    {
        id : 7,
        type : '커피',
        name : '뜨거운 카페모카',
        price : 3900,
        options : {},
        count : 1,
        url : '../assets/coffee/Caffe_Mocha.jpeg'
    },
    {
        id : 8,
        type : '커피',
        name : '차가운 카푸치노',
        price : 2900,
        options : {},
        count : 1,
        url : '../assets/coffee/Cappuccino_Ice.jpeg'
    },
    {
        id : 9,
        type : '커피',
        name : '뜨거운 카푸치노',
        price : 2900,
        options : {},
        count : 1,
        url : '../assets/coffee/Cappuccino.jpeg'
    },
    {
        id : 10,
        type : '커피',
        name : '차가운 카라멜 마끼야또',
        price : 3700,
        options : {},
        count : 1,
        url : '../assets/coffee/Caramel_Macchiato_Ice.jpeg'
    },
    {
        id : 11,
        type : '커피',
        name : '뜨거운 카라멜 마끼야또',
        price : 3700,
        options : {},
        count : 1,
        url : '../assets/coffee/Caramel_Macchiato.jpeg'
    },
    {
        id : 12,
        type : '커피',
        name : '차가운 콜드블루',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/coffee/Coldbrew_Ice.jpeg'
    },
    {
        id : 13,
        type : '커피',
        name : '뜨거운 콜드블루',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/coffee/Coldbrew.jpeg'
    },
    {
        id : 14,
        type : '커피',
        name : '차가운 콜드블루 라떼',
        price : 4000,
        options : {},
        count : 1,
        url : '../assets/coffee/Coldbrew_Latte_Ice.jpeg'
    },
    {
        id : 15,
        type : '커피',
        name : '뜨거운 콜드블루 라떼',
        price : 4000,
        options : {},
        count : 1,
        url : '../assets/coffee/Coldbrew_Latte.jpeg'
    },
    {
        id : 16,
        type : '커피',
        name : '뜨거운 연유 라떼',
        price : 3900,
        options : {},
        count : 1,
        url : '../assets/coffee/Condensed_Milk_Latte.jpeg'
    },
    {
        id : 17,
        type : '커피',
        name : '차가운 큐브 라떼',
        price : 4200,
        options : {},
        count : 1,
        url : '../assets/coffee/Cube_Latte_Ice.jpeg'
    },
    {
        id : 18,
        type : '커피',
        name : '차가운 헤이즐넛 아메리카노',
        price : 2700,
        options : {},
        count : 1,
        url : '../assets/coffee/Hazelnut_Americano_Ice.jpeg'
    },
    {
        id : 19,
        type : '커피',
        name : '뜨거운 헤이즐넛 아메리카노',
        price : 2700,
        options : {},
        count : 1,
        url : '../assets/coffee/Hazelnut_Americano.jpeg'
    },
    {
        id : 20,
        type : '커피',
        name : '차가운 헤이즐넛 라떼',
        price : 2700,
        options : {},
        count : 1,
        url : '../assets/coffee/Hazelnut_Latte_Ice.jpeg'
    },
    {
        id : 21,
        type : '커피',
        name : '뜨거운 헤이즐넛 라떼',
        price : 2700,
        options : {},
        count : 1,
        url : '../assets/coffee/Hazelnut_Latte.jpeg'
    },
    {
        id : 22,
        type : '커피',
        name : '차가운 꿀아메리카노',
        price : 2700,
        options : {},
        count : 1,
        url : '../assets/coffee/Honey_Americano_Ice.jpeg'
    },
    {
        id : 23,
        type : '커피',
        name : '뜨거운 꿀아메리카노',
        price : 2700,
        options : {},
        count : 1,
        url : '../assets/coffee/Honey_Americano.jpeg'
    },
    {
        id : 24,
        type : '커피',
        name : '차가운 바닐라 아메리카노',
        price : 2700,
        options : {},
        count : 1,
        url : '../assets/coffee/Vanilla_Americano_Ice.jpeg'
    },    
    {
        id : 25,
        type : '커피',
        name : '뜨거운 바닐라 아메리카노',
        price : 2700,
        options : {},
        count : 1,
        url : '../assets/coffee/Vanilla_Americano.jpeg'
    },
    {
        id : 26,
        type : '에이드',
        name : '블루 레몬에이드',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/ade/Blue_Lemon_Ade.jpeg'
    },
    {
        id : 27,
        type : '에이드',
        name : '레몬에이드',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/ade/Lemon_Ade.jpeg'
    },
    {
        id : 28,
        type : '에이드',
        name : '체리콕',
        price : 3300,
        options : {},
        count : 1,
        url : '../assets/ade/Cherry_Coke.jpeg'
    },
    {
        id : 29,
        type : '에이드',
        name : '자몽 에이드',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/ade/Grapefruit_Ade.jpeg'
    },
    {
        id : 30,
        type : '에이드',
        name : '청포도 에이드',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/ade/Green_Grape_Ade.jpeg'
    },
    {
        id : 31,
        type : '에이드',
        name : '라임 모히또',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/ade/Lime_Mojito.jpeg'
    },
    {
        id : 32,
        type : '에이드',
        name : '메가 에이드',
        price : 3900,
        options : {},
        count : 1,
        url : '../assets/ade/MEGA_Ade.jpeg'
    },
    {
        id : 33,
        type : '에이드',
        name : '유니콘 매직 에이드(블루)',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/ade/Unicorn_Magic_Ade(Blue).jpeg'
    },
    {
        id : 34,
        type : '에이드',
        name : '유니콘 매직 에이드(핑크)',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/ade/Unicorn_Magic_Ade(Pink).jpeg'
    },
    {
        id : 35,
        type : '음료',
        name : '흑당 버블 라떼',
        price : 3700,
        options : {},
        count : 1,
        url : '../assets/drink/Brown_Sugar_Bubble_Latte.jpeg'
    },
    {
        id : 36,
        type : '음료',
        name : '흑당 버블 밀크티',
        price : 3800,
        options : {},
        count : 1,
        url : '../assets/drink/Brown_Sugar_Bubble_Milktea_Latte.jpeg'
    },
    {
        id : 37,
        type : '음료',
        name : '흑당 버블 라떼(펄x)',
        price : 3800,
        options : {},
        count : 1,
        url : '../assets/drink/Brown_Sugar_Latte(No_Bubble).jpeg'
    },
    {
        id : 38,
        type : '음료',
        name : '흑당 버블 밀크티(펄x)',
        price : 3800,
        options : {},
        count : 1,
        url : '../assets/drink/Brown_Sugar_Milktea_Latte(No_Bubble).jpeg'
    },
    {
        id : 39,
        type : '음료',
        name : '차가운 곡물 라떼',
        price : 3000,
        options : {},
        count : 1,
        url : '../assets/drink/Grain_Latte_Ice.jpeg'
    },
    {
        id : 40,
        type : '음료',
        name : '뜨거운 곡물 라떼',
        price : 3000,
        options : {},
        count : 1,
        url : '../assets/drink/Grain_Latte.jpeg'
    },
    {
        id : 41,
        type : '음료',
        name : '차가운 녹차 라떼',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/drink/Green_Tea_Latte_Ice.jpeg'
    },
    {
        id : 42,
        type : '음료',
        name : '뜨거운 녹차 라떼',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/drink/Green_Tea_Latte.jpeg'
    },
    {
        id : 43,
        type : '음료',
        name : '뜨거운 초코',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/drink/Hot_Choco.jpeg'
    },
    {
        id : 44,
        type : '음료',
        name : '차가운 초코',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/drink/Ice_Choco.jpeg'
    },
    {
        id : 45,
        type : '음료',
        name : '차가운 메가초코',
        price : 3800,
        options : {},
        count : 1,
        url : '../assets/drink/MEGA_Chocolate_Ice.jpeg'
    },
    {
        id : 46,
        type : '음료',
        name : '뜨거운 메가초코',
        price : 3800,
        options : {},
        count : 1,
        url : '../assets/drink/MEGA_Chocolate.jpeg'
    },
    {
        id : 47,
        type : '음료',
        name : '오레오 초코 라떼',
        price : 3900,
        options : {},
        count : 1,
        url : '../assets/drink/Oreo_Chocolate_Latte.jpeg'
    },
    {
        id : 48,
        type : '음료',
        name : '차가운 로얄 밀크티',
        price : 3700,
        options : {},
        count : 1,
        url : '../assets/drink/Royal_Milk_Tea_Latte_Ice.jpeg'
    },
    {
        id : 49,
        type : '음료',
        name : '뜨거운 로얄 밀크티',
        price : 3700,
        options : {},
        count : 1,
        url : '../assets/drink/Royal_Milk_Tea_Latte.jpeg'
    },
    {
        id : 50,
        type : '음료',
        name : '딸기 라떼',
        price : 3700,
        options : {},
        count : 1,
        url : '../assets/drink/Strawberry_Latte.jpeg'
    },
    {
        id : 51,
        type : '음료',
        name : '차가운 고구마 라떼',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/drink/Sweet_Potato_Latte_Ice.jpeg'
    },
    {
        id : 52,
        type : '음료',
        name : '뜨거운 고구마 라떼',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/drink/Sweet_Potato_Latte.jpeg'
    },
    {
        id : 53,
        type : '차',
        name : '차가운 사과유자차',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/tea/Applecitron_Tea_Ice.jpeg'
    },
    {
        id : 54,
        type : '차',
        name : '뜨거운 사과유자차',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/tea/Applecitron_Tea.jpeg'
    },
    {
        id : 55,
        type : '차',
        name : '차가운 캐모마일차',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/tea/Chamomile_Ice.jpeg'
    },
    {
        id : 56,
        type : '차',
        name : '뜨거운 캐모마일차',
        price : 3500,
        options : {},
        count : 1,
        url : '../assets/tea/Chamomile.jpeg'
    },
    {
        id : 57,
        type : '차',
        name : '차가운 유자차',
        price : 3300,
        options : {},
        count : 1,
        url : '../assets/tea/Citron_Tea_Ice.jpeg'
    },
    {
        id : 58,
        type : '차',
        name : '뜨거운 유자차',
        price : 3300,
        options : {},
        count : 1,
        url : '../assets/tea/Citron_Tea.jpeg'
    },
    {
        id : 59,
        type : '차',
        name : '차가운 자몽 티',
        price : 3300,
        options : {},
        count : 1,
        url : '../assets/tea/Grapefruit_Tea_Ice.jpeg'
    },
    {
        id : 60,
        type : '차',
        name : '차가운 자몽 티',
        price : 3300,
        options : {},
        count : 1,
        url : '../assets/tea/Grapefruit_Tea.jpeg'
    },
    {
        id : 61,
        type : '차',
        name : '차가운 녹차',
        price : 2500,
        options : {},
        count : 1,
        url : '../assets/tea/Green_Tea_Ice.jpeg'
    },
    {
        id : 62,
        type : '차',
        name : '뜨거운 녹차',
        price : 2500,
        options : {},
        count : 1,
        url : '../assets/tea/Green_Tea.jpeg'
    },
    {
        id : 63,
        type : '차',
        name : '차가운 허니 자몽 블랙티',
        price : 3700,
        options : {},
        count : 1,
        url : '../assets/tea/Honey_Grapefruit_Black_Tea_Ice.jpeg'
    },
    {
        id : 64,
        type : '차',
        name : '뜨거운 허니 자몽 블랙티',
        price : 3700,
        options : {},
        count : 1,
        url : '../assets/tea/Honey_Grapefruit_Black_Tea.jpeg'
    },
    {
        id : 65,
        type : '차',
        name : '복숭아 아이스티',
        price : 3700,
        options : {},
        count : 1,
        url : '../assets/tea/Peach_Iced_Tea_Ice.jpeg'
    }
]
const MenuPage = () => {
    return (
        <div className='MenuPage_Container'>
            {/* MenuBar */}
            <div className='MenuPage_Menu_Wrapper'>
                {categories.map(categorie => <div className = 'MenuPage_Menu' key = {categorie.id}>{categorie.name}</div>)}
            </div>
            <div>
                {/* Menu Item */}
                <div></div>
                {/* Other Buttons */}
                <div></div>
            </div>
        </div>
    );
};

export default MenuPage;