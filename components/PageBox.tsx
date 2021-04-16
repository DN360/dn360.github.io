import React, {ReactElement, useEffect, useRef, useState} from 'react';
import classes from '../styles/PageBox.module.scss';

export const PageBox: React.FC<{children: ReactElement}> = ({children}) => {
  const [height, setHeight] = useState(undefined);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current === null) return;
    const el = ref.current;
    const computedStyle = getComputedStyle(el);
    setHeight((el).clientHeight +
      [
        computedStyle.marginTop,
        computedStyle.paddingTop,
        computedStyle.borderTopWidth,
      ].map((x) => x.replace(/px/, '')).map(Number).reduce((a, b) => a + b));
  }, []);
  return (
    <div ref={ref} className={classes.root}>
      <div className={classes.wrapper} style={{height}}>
        <div className={classes.page}>
          {children}
        </div>
      </div>
    </div>
  );
};
