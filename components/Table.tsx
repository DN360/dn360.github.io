import React from 'react';
import {cls} from 'utils';
import classes from '../styles/Table.module.scss';

export const Table: React.FC<JSX.IntrinsicElements['table'] & {}> = ({children, className}) => {
  return (
    <table className={cls(classes.table, className)}>
      {children}
    </table>
  );
};
