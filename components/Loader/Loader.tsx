import React from 'react';
import css from './Loader.module.css';

const Loader: React.FC = () => {
  return <div className={css.loader}>Loading notes...</div>;
};

export default Loader;
