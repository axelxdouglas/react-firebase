import React, { Fragment, useState } from "react";

const Listado = () => {
  const [numeros, SetNumeros] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <Fragment>
      <h2 className="mt-3">Uso del List Key Map</h2>
      <ul>
        {numeros.map((item, index) => (
          <li key={index}>
            {item} - {index}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
export default Listado;
