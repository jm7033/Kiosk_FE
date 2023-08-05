import React from "react";
import '../scss/components/Modal.scss';
 
function Modal({closeModal, data}) {
 
  return (
    <div className="Modal">
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <div className="Modal_Text">옵션을 선택하세요</div>
        <div className="Modal_Container">
          <img src={data.url} alt="" className="Modal_Img"/>
          <div className="Modal_Wrapper">
            <div>{data.name}</div>
            <div className="Modal_Count">
              <div>개수</div>
              <div className="Modal_Count_Btn">
                <div>-</div>
                <div>{data.count}</div>
                <div>+</div>
              </div>
            </div>
            <div className="Modal_Ice_Btn">
              <div>얼음량</div>
                <div className="Modal_Ice">
                  <div>적게</div>
                  <div>기본</div>
                  <div>많이</div>
                </div>
            </div>
          </div>
        </div>
        <hr/>
        <div>
          <div>가격 {data.price}</div>
        </div>
        <div>
          <button onClick={closeModal}>취소</button>
          <button>주문 담기</button>
        </div>
      </div>
    </div>
  );
}
 
export default Modal;
