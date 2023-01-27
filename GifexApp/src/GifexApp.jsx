import React, { Fragment, useState } from 'react';
import { PruebaTecnicaGoogle } from './PruebaTecnicaGoogle';

export const GifexApp = () => {
  const [categories, setCategories] = useState(['Deportes', 'Video juegos']);

  const onAddCategory = () => {
    const category = 'Memes';
    setCategories([...categories, category]);
  }

  return (
    <Fragment>
      {/* TITULO DE LA APP */}
      <h1>GifexApp</h1>
      {/* INPUT QUE PODRIA SER UN COMPONENTE */}

      {/* LISTADO DE ITEM O DE GIFS */}
      {/* LISTADO DE ITEMS */}
      <button onClick={onAddCategory}>Agregar categoria</button>
      <ol>
        {categories.map((categorie) => (
          <li key={categorie}>{categorie}</li>
        ))}
      </ol>

      <PruebaTecnicaGoogle />
    </Fragment>
  );
};
