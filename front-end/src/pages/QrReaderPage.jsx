import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Test = (props) => {
  const [data, setData] = useState('');

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            const jsonString = result?.text;

            if (isJSON(jsonString)) {
              setData(jsonString);
            } else {
              console.info('The data is not JSON');
              setData(JSON.stringify(result?.text));
            }
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{JSON.parse(data)}</p>
    </>
  );
};

const isJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

export default Test;