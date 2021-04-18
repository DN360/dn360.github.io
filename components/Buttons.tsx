import React from 'react';
import classes from '../styles/Buttons.module.scss';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {cls} from 'utils';

export const Button: React.FC<JSX.IntrinsicElements['button']> = ({className, children, ...btnProps}) => {
  return (
    <button className={cls(classes.button, className)} {...btnProps}>
      {children}
    </button>
  );
};

export const BackButton: React.FC<{to?: string}> = ({to, children}) => {
  return (
    <Link href={to || '/'}>
      <a>
        <div className={classes.iconButton}>
          <FontAwesomeIcon icon={faArrowLeft} />
          {children || 'go back to top page'}
        </div>
      </a>
    </Link>
  );
};

export const ToggleButton: React.FC<JSX.IntrinsicElements['button'] & {push: boolean}> = ({push, children, ...btnProps}) => {
  return (
    <button className={cls(classes.button, push ? classes.pressedButton : null)} {...btnProps}>
      {children}
    </button>
  );
};
