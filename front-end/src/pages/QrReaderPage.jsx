import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';

const Test = ({cart, setCart}) => {
  const [data, setData] = useState('No result');
  const navigate = useNavigate();

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            cart = result?.text.split('"[');
            cart = result?.text.split('},{');
            setCart(Array.from(cart));
            console.log(cart);
            navigate('/check');
          }
          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      {/* <p>{data !== undefined && navigate('/check')}</p> */}
      <p>{data}</p>
    </>
  );
};

export default Test;