function getElementWidth(content, padding, border) {

    const fullBorderSize = Number.parseFloat(border) * 2;
    const fullPaddingSize = Number.parseFloat(padding) * 2;
    const contentSize = Number.parseFloat(content);
    const finalSize = contentSize + fullPaddingSize + fullBorderSize;

    return finalSize;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
