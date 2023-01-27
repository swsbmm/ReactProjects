import React, { useState, useEffect } from 'react';

const vector = [1, 3, 6, 9];
const vector2 = [1, 6, 2, 10];

export const PruebaTecnicaGoogle = () => {
  const PruebaTecnica = (vector, match) => {
    let cont = 1;
    for (let indexA = 0; indexA < vector.length; indexA++) {
      var numero1 = vector[indexA];
      for (let indexB = cont; indexB < vector.length; indexB++) {
        const result = numero1 + vector[indexB];
        const message = numero1 + ' + ' + vector[indexB] + ' = ' + result;
        if (result == match) {
          return {state: true, message};
        }
      }
      cont = cont + 1;
    }
    return {state: false, message: 'No se encuentra el numero'+ match };;
  };

  useEffect(() => {
    const { state, message } = PruebaTecnica(vector,7);
    if(state){
        window.alert(message);
    };
  }, []);

  return <div>PruebaTecnicaGoogle</div>;
};
