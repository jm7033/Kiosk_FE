// import React from 'react';
// import Advice2 from '../components/Advice2';

// const AdvicePage2 = () => {
//     return (
//         <div>
//             <Advice2/>
//         </div>
//     );
// };

// export default AdvicePage2;


// import React, { useState, useEffect } from 'react';
// import Advice2 from '../components/Advice2';
// import '../css/Modal.scss'; // 모달에 사용할 스타일을 추가하세요.

// const AdvicePage2 = () => {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowModal(true);
//     }, 2000);

//     // Cleanup function to clear the timeout
//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <div>
//       <Advice2 />
//       {showModal && (
//         <div className="modal2">
//           <div className="modal-content2">
//             <p className="modal-text3">감사합니다.<br/>결제가 완료되었습니다!</p>
//             <p className="modal-text4">발급된 대기번호를 확인해 주세요.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdvicePage2;



import React, { useState, useEffect } from "react";
import Advice2 from "../components/Advice2";
import "../css/Modal.scss";

const AdvicePage2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [queueNumber, setQueueNumber] = useState(null);

  useEffect(() => {
    const storedQueueNumber = localStorage.getItem("queueNumber") || 1;
    setQueueNumber(Number(storedQueueNumber));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
      setQueueNumber((prevNumber) => {
        const newQueueNumber = prevNumber + 1;
        localStorage.setItem("queueNumber", newQueueNumber);
        return newQueueNumber;
      });
    }, 2000);


    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <Advice2 />
      {showModal && (
        <div className="modal2">
          <div className="modal-content2">
            <p className="modal-text3">
              감사합니다.<br />결제가 완료되었습니다!
            </p>
            <p className="modal-text4">
              발급된 대기번호를 확인해 주세요
            </p>
            <div className="modal-text5">{queueNumber}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvicePage2;