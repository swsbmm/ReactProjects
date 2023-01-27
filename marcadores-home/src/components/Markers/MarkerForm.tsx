import { Fragment } from 'react';

const MarkerForm = () => {
  return (
    <Fragment>
      <form className="bg-dark p-2 rounded">
        <div className="form-group ">
          <label className="text-light">Nombre de la web</label>
          <input type="email" className="form-control" minLength={2} maxLength={60} placeholder="Nombre de la web" />
        </div>
        <div className="form-group ">
          <label className="text-light">URL de la WEB</label>
          <input type="email" className="form-control" minLength={2} maxLength={60} placeholder="URL" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default MarkerForm;
