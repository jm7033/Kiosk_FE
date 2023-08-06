import React, {useState} from "react";
import '../scss/components/Modal.scss';
 
function Modal({closeModal, data, cart, setCart}) {

  const [count, setCount] = useState(1);

  const onIncrease = () => {
    setCount(count+1);
  };

  const onDecrease = () => {
    if(count-1 === 0) {
      alert('1개 이상 담아주세요');
    }
    else{
      setCount(count-1);
    }
  };

  const onSubmit = () => {
    const temp = data;
    temp.count = count;
    cart.push(temp);
    console.log(temp);
    console.log(cart);
    closeModal();
  }
 
  const onAddOption = (e) => {

    console.log(e.target.id);
    const temp = data;

    // Add the detail option about menu using switch
    switch (e.target.id) {
      case '1':
        temp.options.ice = '적게';
        break;
      case '2':
        temp.options.ice = '보통';
        break;
      case '3':
        temp.options.ice = '많이';
        break;
      default:
        break;
    }
  }
  return (
    <div className="Modal">
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <div className="Modal_Text">옵션을 선택하세요</div>
        <div className="Modal_Container">
          <img src={data.url} alt="" className="Modal_Img"/>
          <div className="Modal_Wrapper">
            <div className="Modal_Menu_Text">{data.name}</div>
            <div className="Modal_Count">
              <div style={{fontSize : '30px'}}>개수</div>
              <div className="Modal_Count_Btn">
                <div onClick={onDecrease} className="countbutton">-</div>
                <div style={{marginLeft:'40px', marginRight:'40px', fontSize: '30px'}}>{count}</div>
                <div onClick={onIncrease} className="countbutton">+</div>
              </div>
            </div>
            <div className="Modal_Ice">
              <div style={{fontSize : '30px'}}>얼음량</div>
                <div className="Modal_Ice_Btn">
                  <div className="Icebutton" id = {1} onClick = {onAddOption}>적게</div>
                  <div className="Icebutton " id = {2} onClick = {onAddOption}>기본</div>
                  <div className="Icebutton" id = {3} onClick = {onAddOption}>많이</div>
                </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="Modal_Price">
          <div>가격 {data.price * count}</div>
        </div>
        <div className="Modal_Btn">
          <button onClick={closeModal} className="Modal_Action_Btn">취소</button>
          <button className="Modal_Action_Btn" onClick={onSubmit}>주문 담기</button>
        </div>
      </div>
    </div>
  );
}
 
export default Modal;
