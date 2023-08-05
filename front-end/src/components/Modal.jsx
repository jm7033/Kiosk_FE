import React from "react";
import '../scss/components/Modal.scss';
 
function Modal({closeModal, data}) {
 
  return (
    <div className="Modal">
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
          <div>
              <img src={data.url} alt='' className='img'/>
              <div className='text'>
                {data.name}
                 <br/>
                {data.price}원
              </div>
              <button onClick={closeModal}>취소하기</button>
              <button>주문하기</button>
          </div>
      </div>
    </div>
  );
}
 
export default Modal;
