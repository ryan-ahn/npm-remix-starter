import { installGlobals } from '@remix-run/node';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/vitest';

installGlobals();

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {}

  observe() {}

  unobserve() {}

  root = null;

  rootMargin = '';

  thresholds = [0];

  takeRecords = () => [];
};

global.ResizeObserver = class ResizeObserver {
  constructor() {}

  disconnect() {}

  observe() {}

  unobserve() {}
};

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };
