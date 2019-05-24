import BREAKPOINTS from "./Breakpoints";

const GRID = {
  container: `
    display: block;
    margin: 0 auto;

    @media (max-width: ${BREAKPOINTS.tablet}) {
      max-width: calc(100vw-4rem);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
      max-width: calc(100vw-2rem);
    }
  `,
  wrapper: `
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    @media (max-width: ${BREAKPOINTS.tablet}) {
      grid-template-columns: repeat(8, 1fr);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
      grid-template-columns: repeat(4, 1fr);
    }
  `
};

export default GRID;
