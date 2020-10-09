import * as React from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, { Vector, forces } from "react-particle-image";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#ffffff",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

export default function App() {
  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <ParticleImage
      src={require("./react-logo.png")}
      width={Number(innerWidth)}
      height={Number(innerHeight)}
      scale={0.85}
      entropy={6}
      maxParticles={3000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      // backgroundColor="hsl(207 90% 54% / 0)"
    />
  );
}
