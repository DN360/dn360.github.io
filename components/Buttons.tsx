import React from 'react';
import classes from '../styles/Buttons.module.scss';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export const Button: React.FC<{}> = ({children}) => {
  return (
    <div className={classes.button}>
      {children}
    </div>
  );
};

export const BackButton: React.FC<{}> = () => {
  return (
    <Link href="/">
      <a>
        <div className={classes.iconButton}>
          <FontAwesomeIcon icon={faArrowLeft} />
        go back to top page
        </div>
      </a>
    </Link>
  );
};
