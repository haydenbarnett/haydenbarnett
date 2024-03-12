/* eslint-disable id-length */
import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import type { FC } from 'react';

type GlobeProps = {
  readonly lat?: number;
  readonly long?: number;
};

const locationToAngles = (lat: number, long: number) => [
  Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
  (lat * Math.PI) / 180,
];

export const Globe: FC<GlobeProps> = ({ lat, long }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const focusRef = useRef([0, 0]);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 80,
      friction: 50,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    if (!lat && !long) {
      focusRef.current = [0, 0];
    } else {
      focusRef.current = locationToAngles(lat ?? 0, long ?? 0);
    }
  }, [lat, long]);

  useEffect(() => {
    let width = 0;
    let currentPhi = 0;
    let currentTheta = 0;

    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);

    onResize();
    if (!canvasRef.current) return undefined;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: -0.2,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 3,
      mapBaseBrightness: 0.1,
      baseColor: [0.9, 0.9, 1],
      markerColor: [2, 2, 2],
      glowColor: [24 / 255, 24 / 255, 27 / 255],
      opacity: 0.65,
      markers: [
        { location: [-33.8688, 151.2093], size: 0.03 },
        { location: [27.6648, -81.5158], size: 0.03 },
      ],
      onRender: (state) => {
        if (!pointerInteracting.current || !focusRef.current[0]) {
          currentPhi += 0.003;
        }
        const newPhi = currentPhi + r.get();
        state.phi = newPhi;
        state.theta = currentTheta;
        state.width = width * 2;
        state.height = width * 2;
        if (focusRef.current[0] !== 0) {
          const [focusPhi, focusTheta] = focusRef.current;
          const distPositive =
            (focusPhi - newPhi + Math.PI * 2) % (Math.PI * 2);
          const distNegative =
            (newPhi - focusPhi + Math.PI * 2) % (Math.PI * 2);
          if (distPositive < distNegative) {
            currentPhi += distPositive * 0.08;
          } else {
            currentPhi -= distNegative * 0.08;
          }
          currentTheta = currentTheta * 0.92 + focusTheta * 0.08;
        }
      },
    });

    setTimeout(() => {
      if (!canvasRef.current) return;
      canvasRef.current.style.opacity = '0.5';
    }, 200);

    return () => globe.destroy();
  }, [r]);

  return (
    <div className="relative aspect-square w-full">
      <canvas
        ref={canvasRef}
        aria-label="Planet"
        onPointerDown={(event) => {
          pointerInteracting.current =
            event.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grabbing';
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(event) => {
          if (pointerInteracting.current !== null) {
            const delta = event.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 100,
            });
          }
        }}
        className="h-full w-full cursor-grab opacity-0 transition duration-1000"
        style={{
          contain: 'layout paint size',
        }}
      />
    </div>
  );
};
