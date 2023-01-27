import { Fragment } from 'react';

export const TableMarkers = (props: any) => {
  return (
    <Fragment>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">WEB</th>
            <th scope="col">LINK</th>
            <th scope="col">OPTIONS</th>
          </tr>
        </thead>
        <tbody>
          {props.markers.map((marker: any) => {
            return (
              <tr key={marker.id}>
                <th scope="row">{marker.id}</th>
                <td>{marker.name}</td>
                <td><a href={marker.website} target="_black" rel="noopener noreferrer">{marker.website}</a></td>
                <td>
                  <button type="button" className="m-2 btn btn-light">Editar</button>
                  <button type="button" className="m-2 btn btn-danger">Eliminar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};
