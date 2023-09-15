export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const handleGetBreakPoint = (breakPoint) => {
  return BREAKPOINTS[breakPoint] ? `${BREAKPOINTS[breakPoint]}px` : breakPoint;
};

export const theme = () => ({
  navHeight: "87.5px",
  primary: "#855AAF",
  minQuery: (breakpoint) =>
    `@media(min-width: ${handleGetBreakPoint(breakpoint)})`,
  maxQuery: (breakpoint) =>
    `@media(max-width: ${handleGetBreakPoint(breakpoint)})`,
  minMaxQuery: (min, max) =>
    `@media(max-width: ${handleGetBreakPoint(
      max
    )}) and (min-width: ${handleGetBreakPoint(min)})`,
  fontFamily: `
    'Caros Text',-apple-system,BlinkMacSystemFont,"Helvetica Neue",
    "Segoe UI","Oxygen","Ubuntu","Cantarell","Open Sans",sans-serif
    `,
});
