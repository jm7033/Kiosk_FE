// import React from 'react';
// import '../css/TwoButtons.scss';
// //import { useNavigate } from "react-router-dom";

// const TwoButtons = ({ onButtonClick1, onButtonClick2 }) => {

//   // const navigate = useNavigate();

//   // const PurchasePage = () => {
//   //   navigate("/purchase");
//   // };

//   return (
//     <div className="two-buttons">
//       <button onClick={onButtonClick1}>건너뛰기</button>
//       <button onClick={onButtonClick2}>적립후결제</button>
//     </div>
//   );
// };

// export default TwoButtons;



// import React, { useState } from 'react';
// import '../css/TwoButtons.scss';

// const Modal = ({ onClose }) => {
//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <p className="modal-text1">적립이 완료되었습니다!</p>
//         <p className="modal-text2">결제창으로 이동합니다.</p>
//         {/* <button onClick={onClose}>닫기</button> */}
//       </div>
//     </div>
//   );
// };

// const TwoButtons = ({ onButtonClick1, onButtonClick2 }) => {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const closeModal = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <div className="two-buttons">
//       <button onClick={onButtonClick1}>건너뛰기</button>
//       <button onClick={showModal}>적립후결제</button>
//       {isModalVisible && <Modal onClose={closeModal} />}
//     </div>
//   );
// };

// export default TwoButtons;


import React, { useState, useEffect } from 'react';
import '../css/TwoButtons.scss';
import { useNavigate } from "react-router-dom";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-text1">적립이 완료되었습니다!</p>
        <p className="modal-text2">결제창으로 이동합니다.</p>
      </div>
    </div>
  );
};

const TwoButtons = ({ onButtonClick1, onButtonClick2 }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      navigate("/advice"); 
      setIsModalVisible(false);
    }, 1500);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="two-buttons">
      <button onClick={onButtonClick1}>건너뛰기</button>
      <button onClick={showModal}>적립후결제</button>
      {isModalVisible && <Modal onClose={closeModal} />}
    </div>
  );
};

export default TwoButtons;