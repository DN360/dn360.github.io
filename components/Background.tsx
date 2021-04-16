import React from 'react';
import classes from '../styles/Background.module.scss';
import {animated, SpringValue, Transition} from 'react-spring';
import {NextComponentType, NextPageContext} from 'next';
import * as easings from 'd3-ease';
import {PageBox} from './PageBox';

export type BackgroundItem = {
  key: string;
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any
}

const outerProps = {
  initialized: false,
  duration: 1000,
  maxLayer: 10,
};

const colorLayers = new Array(outerProps.maxLayer * 3).fill(0).map((_, i) => (Math.sin(Math.PI / 180 * (88 + Math.random() * 2) * i / 3) + 1) / 2);

export const Background: React.FC<{items: BackgroundItem[]}> = ({items, children}) => {
  return (
    <div className={classes.root}>
      <Transition from={{
        z: [0, 0],
      }} leave={{
        z: [0, 1],
      }} enter={{
        z: [1, 0],
      }}
      config={{
        duration: outerProps.initialized ? outerProps.duration * 2 : outerProps.duration,
        easing: easings.easeCubic,
      }}
      items={items}
      keys={(item: BackgroundItem) => item.key}
      >
        {
          (animatedProps: {[name: string]: SpringValue}, {pageProps, Component}) => {
            const styles: React.CSSProperties = {
              opacity: animatedProps.z.to((x: number) => x >= 0.5 ? 1 : 0) as any,
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            };
            const curtainStyle: React.CSSProperties = {
              width: 0,
              height: 0,
              textAlign: 'center',
              position: 'absolute',
              top: '50%',
              left: '50%',
            };
            const MAX_WIDTH = (typeof window) === 'undefined' ? 0 : 1.0 * ((window.innerWidth + window.innerHeight) * Math.sqrt(2) / 4);
            const MAX_LAYER = outerProps.maxLayer;
            // 最初は強制的に表示するため
            const forceVisibled = !outerProps.initialized;
            const func = (x: number, layer: number) => {
              if (forceVisibled) {
                const offset1 = 1 - (layer + 1) / MAX_LAYER;
                const offset2 = 1 - layer / MAX_LAYER;
                if (x < offset1) return 0;
                if (x > offset2) return 1;
                return MAX_LAYER * (x - offset1);
              }

              // ページ遷移ではオフセットの計算がズレる
              const twiceMaxLayer = MAX_LAYER * 2;
              const offset1 = 1 - (layer + 1) / twiceMaxLayer;
              const offset2 = 1 - layer / twiceMaxLayer;
              if (x < offset1) return 0;
              if (x > offset2) return 1;
              return twiceMaxLayer * (x - offset1);
            };
            const colorFunc = (layer: number) => layer % 3 === 1 ? 255 : colorLayers[(layer - layer % 3) / 3] * 240 + (colorLayers[layer] * 2 - 1) * 10;
            const borderFunc = (z: number, layer: number) => `${MAX_WIDTH * (z / MAX_LAYER)}px solid rgb(${colorFunc(layer * 3)}, ${colorFunc(layer * 3 + 1)}, ${colorFunc(layer * 3 + 2)})`;
            const marginFunc = (z: number, layer: number) => `-${MAX_WIDTH * (z / MAX_LAYER) + (MAX_WIDTH * layer / MAX_LAYER)}px`;
            const sizeFunc = (layer: number) => `${MAX_WIDTH * layer / MAX_LAYER * 2}px`;
            outerProps.initialized = true;
            const recursiveFunc = (layer: number) => layer >= MAX_LAYER ? (<></>) : (
              <animated.div style={{
                ...curtainStyle,
                transform: layer === 0 ? animatedProps.z.to((x: number, y: number) => `rotateZ(${y > 0 ? '-' : ''}${x * 90 * 1 + 45}deg)`) as any : 'none',
                display: animatedProps.z.to((x: number) => x >= 1 ? 'none' : 'block') as any,
                opacity: animatedProps.z.to((x: number) => forceVisibled ? 1 : (x < 0.5 ? 0 : 1)) as any,
                border: animatedProps.z.to((x: number) => borderFunc(forceVisibled ? 1 - func(x, layer) : 1 - func(x, layer), layer)) as any,
                margin: animatedProps.z.to((x: number) => marginFunc(forceVisibled ? 1 - func(x, layer) : 1 - func(x, layer), layer)) as any,
                width: animatedProps.z.to(() => sizeFunc(layer)) as any,
                height: animatedProps.z.to(() => sizeFunc(layer)) as any,
              }}>
                {recursiveFunc(layer + 1)}
              </animated.div>
            );
            return (
              <>
                <animated.div style={{...styles, width: '100%'}}>
                  <PageBox>
                    <Component {...pageProps} />
                  </PageBox>
                </animated.div>
                {
                  recursiveFunc(0)
                }
              </>
            );
          }
        }
      </Transition>
    </div>
  );
};
