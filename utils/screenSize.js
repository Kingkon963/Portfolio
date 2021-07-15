/*
$sm: 576px;
$md: 768px;
$lg: 992px;
$xl: 1200px;
$xxl: 1400px;
*/
var sm = 576;
var md = 768;
var lg = 992;
var xl = 1200;
var xxl = 1400;

export const getWidth = () => {
  if (process.browser) {
    const width = window.screen.width;
    if (width <= sm) return "sm";
    if (width > sm && width <= md) return "md";
    if (width > md && width <= lg) return "lg";
    if (width > lg && width <= xl) return "xl";
    if (width > xl) return "xxl";
  }
};

export const displayAt = (size, component) => {
  if (size.includes(getWidth())) return component;
  else <></>;
};
