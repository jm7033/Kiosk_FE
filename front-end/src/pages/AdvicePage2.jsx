import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import Advice2 from "../components/Advice2";
import "../scss/components/Modal2.scss";

const AdvicePage2 = ({receipt, cart}) => {

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [queueNumber, setQueueNumber] = useState(0);

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

  useEffect(() => {
    const goHome = setTimeout(() => {
      setShowModal(false);
      navigate('/');
    }, 7000);

    return () => {
      clearTimeout(goHome);
    }
  })

  const value = JSON.stringify(cart);

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
            <div style={{ height: "auto", margin: "80px 180px 0 0", maxWidth: 64, width: "100%" }}>
              <QRCode
                style={{ height: "256px", width: "256px" }}
                value={value}
                viewBox={`0 0 256 256`}
              />
              {console.log(value)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvicePage2;