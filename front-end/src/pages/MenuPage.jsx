import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/MenuPage.scss';
import Megaricano from '../assets/coffee/32oz_Americano.jpeg';
import IcedAmericano from '../assets/coffee/Americano_Ice.jpeg';
import Americano from '../assets/coffee/Americano.jpeg';
import IcedCaffeLatte from '../assets/coffee/Caffe_Latte_Ice.jpeg'
import CaffeLatte from '../assets/coffee/Caffe_Latte.jpeg'
import IcedCaffeMocha from '../assets/coffee/Caffe_Mocha_Ice.jpeg'
import CaffeMocha from '../assets/coffee/Caffe_Mocha.jpeg'
import IcedCappuccino from '../assets/coffee/Cappuccino_Ice.jpeg';
import Cappuccino from '../assets/coffee/Cappuccino.jpeg';
import IcedCaramelMacchiato from '../assets/coffee/Caramel_Macchiato_Ice.jpeg';
import CaramelMacchiato from '../assets/coffee/Caramel_Macchiato.jpeg';
import IcedColdbrew from '../assets/coffee/Coldbrew_Ice.jpeg';
import Coldbrew from '../assets/coffee/Coldbrew.jpeg';
import IcedColdbrewLatte from '../assets/coffee/Coldbrew_Latte_Ice.jpeg';
import ColdbrewLatte from '../assets/coffee/Coldbrew_Latte.jpeg';
import CondensedMilkLatte from '../assets/coffee/Condensed_Milk_Latte.jpeg';
import IcedCubeLatte from '../assets/coffee/Cube_Latte_Ice.jpeg';
import IcedHazelnutAmericano from '../assets/coffee/Hazelnut_Americano_Ice.jpeg';
import HazelnutAmericano from '../assets/coffee/Hazelnut_Americano_Ice.jpeg';
import IcedHazelnutLatte from '../assets/coffee/Hazelnut_Latte_Ice.jpeg';
import HazelnutLatte from '../assets/coffee/Hazelnut_Latte.jpeg';
import IcedHoneyAmericano from '../assets/coffee/Honey_Americano_Ice.jpeg';
import HoneyAmericano from '../assets/coffee/Honey_Americano.jpeg';
import IcedVanillaAmericano from '../assets/coffee/Vanilla_Americano_Ice.jpeg';
import VanillaAmericano from '../assets/coffee/Vanilla_Americano.jpeg';
import BlueLemonAde from '../assets/ade/Blue_Lemon_Ade.jpeg';
import LemonAde from '../assets/ade/Lemon_Ade.jpeg';
import CherryCoke from '../assets/ade/Cherry_Coke.jpeg';
import GrapefruitAde from '../assets/ade/Grapefruit_Ade.jpeg';
import GreenGrapeAde from '../assets/ade/Green_Grape_Ade.jpeg';
import LimeMojito from '../assets/ade/Lime_Mojito.jpeg';
import MEGAAde from '../assets/ade/MEGA_Ade.jpeg';
import BlueUnicornMagicAde from '../assets/ade/Unicorn_Magic_Ade(Blue).jpeg';
import PinkUnicornMagicAde from '../assets/ade/Unicorn_Magic_Ade(Pink).jpeg';
import BrownSugarBubbleLatte from '../assets/drink/Brown_Sugar_Bubble_Latte.jpeg';
import BrownSugarBubbleMilkteaLatte from '../assets/drink/Brown_Sugar_Bubble_Milktea_Latte.jpeg';
import BrownSugarLatteNoBubble from '../assets/drink/Brown_Sugar_Latte(No_Bubble).jpeg';
import BrownSugarMilkteaLatteNoBubble from '../assets/drink/Brown_Sugar_Milktea_Latte(No_Bubble).jpeg';
import IcedGrainLatte from '../assets/drink/Grain_Latte_Ice.jpeg';
import GrainLatte from '../assets/drink/Grain_Latte.jpeg';
import IcedGreenTeaLatte from '../assets/drink/Green_Tea_Latte_Ice.jpeg';
import GreenTeaLatte from '../assets/drink/Green_Tea_Latte.jpeg';
import HotChoco from '../assets/drink/Hot_Choco.jpeg';
import IcedChoco from '../assets/drink/Ice_Choco.jpeg';
import IcedMEGAChocolate from '../assets/drink/MEGA_Chocolate_Ice.jpeg'
import MEGAChocolate from '../assets/drink/MEGA_Chocolate.jpeg'
import OreoChocolateLatte from '../assets/drink/Oreo_Chocolate_Latte.jpeg';
import IcedRoyalMilkTeaLatte from '../assets/drink/Royal_Milk_Tea_Latte_Ice.jpeg';
import RoyalMilkTeaLatte from '../assets/drink/Royal_Milk_Tea_Latte.jpeg';
import StrawberryLatte from '../assets/drink/Strawberry_Latte.png';
import IcedSweetPotatoLatte from '../assets/drink/Sweet_Potato_Latte_Ice.jpeg';
import SweetPotatoLatte from '../assets/drink/Sweet_Potato_Latte.jpeg';
import IcedApplecitronTea from '../assets/tea/Applecitron_Tea_Ice.jpeg';
import ApplecitronTea from '../assets/tea/Applecitron_Tea.jpeg';
import IcedChamoile from '../assets/tea/Chamomile_Ice.jpeg';
import Chamoile from '../assets/tea/Chamomile.jpeg';
import IcedCitronTea from '../assets/tea/Citron_Tea_Ice.jpeg';
import CitronTea from '../assets/tea/Citron_Tea.jpeg';
import IcedGrapefruitTea from '../assets/tea/Grapefruit_Tea_Ice.jpeg';
import GrapefruitTea from '../assets/tea/Grapefruit_Tea.jpeg';
import IcedGreenTea from '../assets/tea/Green_Tea_Ice.jpeg';
import GreenTea from '../assets/tea/Green_Tea.jpeg';
import IcedHoneyGrapefruitBlackTea from '../assets/tea/Honey_Grapefruit_Black_Tea_Ice.jpeg';
import HoneyGrapefruitBlackTea from '../assets/tea/Honey_Grapefruit_Black_Tea.jpeg';
import IcedPeachTea from '../assets/tea/Peach_Iced_Tea_Ice.jpeg';

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
        url : Megaricano
    },
    {
        id : 2,
        type : '커피',
        name : '차가운 아메리카노',
        price : 2000,
        options : {},
        count : 1,
        url : IcedAmericano
    },
    {
        id : 3,
        type : '커피',
        name : '뜨거운 아메리카노',
        price : 1500,
        options : {},
        count : 1,
        url : Americano
    },
    {
        id : 4,
        type : '커피',
        name : '차가운 카페라떼',
        price : 2900,
        options : {},
        count : 1,
        url : IcedCaffeLatte
    },
    {
        id : 5,
        type : '커피',
        name : '뜨거운 카페라떼',
        price : 2900,
        options : {},
        count : 1,
        url : CaffeLatte
    },
    {
        id : 6,
        type : '커피',
        name : '차가운 카페모카',
        price : 3900,
        options : {},
        count : 1,
        url : IcedCaffeMocha
    },
    {
        id : 7,
        type : '커피',
        name : '뜨거운 카페모카',
        price : 3900,
        options : {},
        count : 1,
        url : CaffeMocha
    },
    {
        id : 8,
        type : '커피',
        name : '차가운 카푸치노',
        price : 2900,
        options : {},
        count : 1,
        url : IcedCappuccino
    },
    {
        id : 9,
        type : '커피',
        name : '뜨거운 카푸치노',
        price : 2900,
        options : {},
        count : 1,
        url : Cappuccino
    },
    {
        id : 10,
        type : '커피',
        name : '차가운 카라멜 마끼야또',
        price : 3700,
        options : {},
        count : 1,
        url : IcedCaramelMacchiato
    },
    {
        id : 11,
        type : '커피',
        name : '뜨거운 카라멜 마끼야또',
        price : 3700,
        options : {},
        count : 1,
        url : CaramelMacchiato
    },
    {
        id : 12,
        type : '커피',
        name : '차가운 콜드블루',
        price : 3500,
        options : {},
        count : 1,
        url : IcedColdbrew
    },
    {
        id : 13,
        type : '커피',
        name : '뜨거운 콜드블루',
        price : 3500,
        options : {},
        count : 1,
        url : Coldbrew
    },
    {
        id : 14,
        type : '커피',
        name : '차가운 콜드블루 라떼',
        price : 4000,
        options : {},
        count : 1,
        url : IcedColdbrewLatte
    },
    {
        id : 15,
        type : '커피',
        name : '뜨거운 콜드블루 라떼',
        price : 4000,
        options : {},
        count : 1,
        url : ColdbrewLatte
    },
    {
        id : 16,
        type : '커피',
        name : '뜨거운 연유 라떼',
        price : 3900,
        options : {},
        count : 1,
        url : CondensedMilkLatte
    },
    {
        id : 17,
        type : '커피',
        name : '차가운 큐브 라떼',
        price : 4200,
        options : {},
        count : 1,
        url : IcedCubeLatte
    },
    {
        id : 18,
        type : '커피',
        name : '차가운 헤이즐넛 아메리카노',
        price : 2700,
        options : {},
        count : 1,
        url : IcedHazelnutAmericano
    },
    {
        id : 19,
        type : '커피',
        name : '뜨거운 헤이즐넛 아메리카노',
        price : 2700,
        options : {},
        count : 1,
        url : HazelnutAmericano
    },
    {
        id : 20,
        type : '커피',
        name : '차가운 헤이즐넛 라떼',
        price : 2700,
        options : {},
        count : 1,
        url : IcedHazelnutLatte
    },
    {
        id : 21,
        type : '커피',
        name : '뜨거운 헤이즐넛 라떼',
        price : 2700,
        options : {},
        count : 1,
        url : HazelnutLatte
    },
    {
        id : 22,
        type : '커피',
        name : '차가운 꿀아메리카노',
        price : 2700,
        options : {},
        count : 1,
        url : IcedHoneyAmericano
    },
    {
        id : 23,
        type : '커피',
        name : '뜨거운 꿀아메리카노',
        price : 2700,
        options : {},
        count : 1,
        url : HoneyAmericano
    },
    {
        id : 24,
        type : '커피',
        name : '차가운 바닐라 아메리카노',
        price : 2700,
        options : {},
        count : 1,
        url : IcedVanillaAmericano
    },    
    {
        id : 25,
        type : '커피',
        name : '뜨거운 바닐라 아메리카노',
        price : 2700,
        options : {},
        count : 1,
        url : VanillaAmericano
    },
    {
        id : 26,
        type : '에이드',
        name : '블루 레몬에이드',
        price : 3500,
        options : {},
        count : 1,
        url : BlueLemonAde
    },
    {
        id : 27,
        type : '에이드',
        name : '레몬에이드',
        price : 3500,
        options : {},
        count : 1,
        url : LemonAde
    },
    {
        id : 28,
        type : '에이드',
        name : '체리콕',
        price : 3300,
        options : {},
        count : 1,
        url : CherryCoke
    },
    {
        id : 29,
        type : '에이드',
        name : '자몽 에이드',
        price : 3500,
        options : {},
        count : 1,
        url : GrapefruitAde
    },
    {
        id : 30,
        type : '에이드',
        name : '청포도 에이드',
        price : 3500,
        options : {},
        count : 1,
        url : GreenGrapeAde
    },
    {
        id : 31,
        type : '에이드',
        name : '라임 모히또',
        price : 3500,
        options : {},
        count : 1,
        url : LimeMojito
    },
    {
        id : 32,
        type : '에이드',
        name : '메가 에이드',
        price : 3900,
        options : {},
        count : 1,
        url : MEGAAde
    },
    {
        id : 33,
        type : '에이드',
        name : '유니콘 매직 에이드(블루)',
        price : 3500,
        options : {},
        count : 1,
        url : BlueUnicornMagicAde
    },
    {
        id : 34,
        type : '에이드',
        name : '유니콘 매직 에이드(핑크)',
        price : 3500,
        options : {},
        count : 1,
        url : PinkUnicornMagicAde
    },
    {
        id : 35,
        type : '음료',
        name : '흑당 버블 라떼',
        price : 3700,
        options : {},
        count : 1,
        url : BrownSugarBubbleLatte
    },
    {
        id : 36,
        type : '음료',
        name : '흑당 버블 밀크티',
        price : 3800,
        options : {},
        count : 1,
        url : BrownSugarBubbleMilkteaLatte
    },
    {
        id : 37,
        type : '음료',
        name : '흑당 버블 라떼(펄x)',
        price : 3800,
        options : {},
        count : 1,
        url : BrownSugarLatteNoBubble
    },
    {
        id : 38,
        type : '음료',
        name : '흑당 버블 밀크티(펄x)',
        price : 3800,
        options : {},
        count : 1,
        url : BrownSugarMilkteaLatteNoBubble
    },
    {
        id : 39,
        type : '음료',
        name : '차가운 곡물 라떼',
        price : 3000,
        options : {},
        count : 1,
        url : IcedGrainLatte
    },
    {
        id : 40,
        type : '음료',
        name : '뜨거운 곡물 라떼',
        price : 3000,
        options : {},
        count : 1,
        url : GrainLatte
    },
    {
        id : 41,
        type : '음료',
        name : '차가운 녹차 라떼',
        price : 3500,
        options : {},
        count : 1,
        url : IcedGreenTeaLatte
    },
    {
        id : 42,
        type : '음료',
        name : '뜨거운 녹차 라떼',
        price : 3500,
        options : {},
        count : 1,
        url : GreenTeaLatte
    },
    {
        id : 43,
        type : '음료',
        name : '뜨거운 초코',
        price : 3500,
        options : {},
        count : 1,
        url : HotChoco
    },
    {
        id : 44,
        type : '음료',
        name : '차가운 초코',
        price : 3500,
        options : {},
        count : 1,
        url : IcedChoco
    },
    {
        id : 45,
        type : '음료',
        name : '차가운 메가초코',
        price : 3800,
        options : {},
        count : 1,
        url : IcedMEGAChocolate
    },
    {
        id : 46,
        type : '음료',
        name : '뜨거운 메가초코',
        price : 3800,
        options : {},
        count : 1,
        url : MEGAChocolate
    },
    {
        id : 47,
        type : '음료',
        name : '오레오 초코 라떼',
        price : 3900,
        options : {},
        count : 1,
        url : OreoChocolateLatte
    },
    {
        id : 48,
        type : '음료',
        name : '차가운 로얄 밀크티',
        price : 3700,
        options : {},
        count : 1,
        url : IcedRoyalMilkTeaLatte
    },
    {
        id : 49,
        type : '음료',
        name : '뜨거운 로얄 밀크티',
        price : 3700,
        options : {},
        count : 1,
        url : RoyalMilkTeaLatte
    },
    {
        id : 50,
        type : '음료',
        name : '딸기 라떼',
        price : 3700,
        options : {},
        count : 1,
        url : StrawberryLatte
    },
    {
        id : 51,
        type : '음료',
        name : '차가운 고구마 라떼',
        price : 3500,
        options : {},
        count : 1,
        url : IcedSweetPotatoLatte
    },
    {
        id : 52,
        type : '음료',
        name : '뜨거운 고구마 라떼',
        price : 3500,
        options : {},
        count : 1,
        url : SweetPotatoLatte
    },
    {
        id : 53,
        type : '차',
        name : '차가운 사과유자차',
        price : 3500,
        options : {},
        count : 1,
        url : IcedApplecitronTea
    },
    {
        id : 54,
        type : '차',
        name : '뜨거운 사과유자차',
        price : 3500,
        options : {},
        count : 1,
        url : ApplecitronTea
    },
    {
        id : 55,
        type : '차',
        name : '차가운 캐모마일차',
        price : 3500,
        options : {},
        count : 1,
        url : IcedChamoile
    },
    {
        id : 56,
        type : '차',
        name : '뜨거운 캐모마일차',
        price : 3500,
        options : {},
        count : 1,
        url : Chamoile
    },
    {
        id : 57,
        type : '차',
        name : '차가운 유자차',
        price : 3300,
        options : {},
        count : 1,
        url : IcedCitronTea
    },
    {
        id : 58,
        type : '차',
        name : '뜨거운 유자차',
        price : 3300,
        options : {},
        count : 1,
        url : CitronTea
    },
    {
        id : 59,
        type : '차',
        name : '차가운 자몽 티',
        price : 3300,
        options : {},
        count : 1,
        url : IcedGrapefruitTea
    },
    {
        id : 60,
        type : '차',
        name : '뜨거운 자몽 티',
        price : 3300,
        options : {},
        count : 1,
        url : GrapefruitTea
    },
    {
        id : 61,
        type : '차',
        name : '차가운 녹차',
        price : 2500,
        options : {},
        count : 1,
        url : IcedGreenTea
    },
    {
        id : 62,
        type : '차',
        name : '뜨거운 녹차',
        price : 2500,
        options : {},
        count : 1,
        url : GreenTea
    },
    {
        id : 63,
        type : '차',
        name : '차가운 허니 자몽 블랙티',
        price : 3700,
        options : {},
        count : 1,
        url : IcedHoneyGrapefruitBlackTea
    },
    {
        id : 64,
        type : '차',
        name : '뜨거운 허니 자몽 블랙티',
        price : 3700,
        options : {},
        count : 1,
        url : HoneyGrapefruitBlackTea
    },
    {
        id : 65,
        type : '차',
        name : '복숭아 아이스티',
        price : 3700,
        options : {},
        count : 1,
        url : IcedPeachTea
    }
]


const MenuPage = ({receipt, setReceipt, categorie}) => {
    return (
        <div className='MenuPage_Container'>
            {/* MenuBar */}
            <div className='MenuPage_Menu_Wrapper'>
                {categories.map(categorie => 
                    <NavLink
                        className = 'MenuPage_Menu' 
                        key = {categorie.id}
                        to = {categorie.name === '/전체' ? '/menu/전체' : `/menu/${categorie.name}`}
                    >
                        {categorie.name}
                    </NavLink>
                )}
            </div>
            <div className='MenuPage_Items'>
                {
                    items.map(item => 
                        <div key={item.id} className='MenuPage_item'>
                            <img src={item.url} alt='' className='MenuPage_img'/>
                            {console.log(item.url)}
                            <div>
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    {item.price}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {/* Other Buttons */}
            <div>

            </div>
        </div>
    );
};

export default MenuPage;