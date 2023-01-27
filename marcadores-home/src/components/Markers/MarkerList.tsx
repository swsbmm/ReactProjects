import { useState, Fragment, useEffect } from 'react';
import MarkerForm from './MarkerForm';
import * as CompanyServer from './MarkerServer';
import { TableMarkers } from './TableMarkers';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


const markers = [
  { id: 1, name: 'MIWEB', website: 'https://heflox.com' },
  { id: 2, name: 'GOOGLE', website: 'https://google.com' },
];

function MarkerList() {
  const [marker, setmarker] = useState(markers);

  const listMarkers = async () => {
    try {
      const res = await CompanyServer.listMarkers();
      const data = await res.json();
      setmarker(data.markers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listMarkers();
  }, []);

  return (
    <Fragment>
      <h1>Marcadores</h1>
      <button type="button" className="mb-3 btn btn-success">Agregar nuevo marcador</button>
      <TableMarkers markers={marker} />
    </Fragment>
  );
}

export default MarkerList;
