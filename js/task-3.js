function getElementWidth(content, padding, border) {
  const elementWidth = Number.parseFloat(content);
  const elementHorizontalPadding = Number.parseFloat(padding);
  const elementBorderThickness = Number.parseFloat(border);
  return (
    elementWidth + elementHorizontalPadding * 2 + elementBorderThickness * 2
  );
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
