import React, {ReactElement} from 'react';
import classes from '../styles/PageBox.module.scss';

export const PageBox: React.FC<{children: ReactElement}> = ({children}) => {
  return (
    <div className={classes.root}>
      <div className={classes.page}>
        {children}
      </div>
    </div>
  );
};
