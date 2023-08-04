import React, {useEffect} from "react";
import '../scss/components/Modal.scss';
 
function Modal({closeModal, data}) {

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  
 
  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
          <div>
              <img src={data.url} alt='' className='img'/>
              <div className='text'>
                {data.name}
                 <br/>
                {data.price}원
              </div>
              
          </div>
      </div>
    </div>
  );
}
 
export default Modal;
