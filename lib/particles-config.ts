import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const initParticles = async (engine: Engine) => {
  await loadSlim(engine);
};

export const getParticlesConfig = (theme: 'light' | 'dark' = 'light') => {
  const colors = theme === 'dark' 
    ? ["#007B94", "#0EA5E9", "#06B6D4", "#10B981", "#3B82F6"]
    : ["#007B94", "#0EA5E9", "#06B6D4", "#10B981", "#3B82F6"];

  return {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 3,
        },
        bubble: {
          distance: 200,
          size: 6,
          duration: 0.3,
          opacity: 0.8,
        },
      },
    },
    particles: {
      color: {
        value: colors,
      },
      links: {
        color: {
          value: "#007B94",
        },
        distance: 120,
        enable: true,
        opacity: theme === 'dark' ? 0.1 : 0.15,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "out" as const,
        },
        random: true,
        speed: {
          min: 0.3,
          max: 1,
        },
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 60,
      },
      opacity: {
        value: {
          min: 0.1,
          max: theme === 'dark' ? 0.3 : 0.4,
        },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      shape: {
        type: ["circle", "triangle"],
      },
      size: {
        value: {
          min: 1,
          max: 4,
        },
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };
}; 