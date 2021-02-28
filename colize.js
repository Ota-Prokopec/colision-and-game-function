function colisioninarray(element, array) {
  const element__top = element.offsetTop ;
  const array__top = array.offsetTop;
  const element__left = element.offsetLeft;
  const array__left = array.offsetLeft;
  const element__bottom = element__top + element.offsetHeight;
  const element__right = element__left + element.offsetWidth;
  const array__bottom = array__top + array.offsetHeight;
  const array__right = array__left + array.offsetWidth;
  const thispointleft = element.offsetLeft - array.offsetLeft;
  const thispointtop = element.offsetTop - array.offsetTop;
  const colisionisnot = element__top > array__top && element__left > array__left && element__bottom < array__bottom && element__right < array__right
  || element__top === array__top &&
   element__left === array__left
   && element__bottom === array__bottom &&
    element__right === array__right;
    ////console.log(element__top > array__top && element__left > array__left && element__bottom < array__bottom && element__right > array__right);
  if (colisionisnot) {

    return true;

  }
  else {
//////////////////////////////////////////////////////////////////////////////////////jjjjjjjjjjjjjjjjjjjjjjjjjjjjj
       if (element__top < array__top || element__top == array__top) {
                      return {element:element, direction:thispointleft, colisionelement:array, position:"top"};
       }
        if (element__bottom > array__bottom || element__bottom === array__bottom) {
                      return {element:element, direction:thispointleft, colisionelement:array, positon:"bottom"};
       }
       if (element__left < array__left || element__left == array__left) {
                      return {element:element, direction:thispointtop, colisionelement:array, positon:"left"};
       }
        if (element__right > array__right || element__right === array__right) {
                      return {element:element, direction:thispointtop, colisionelement:array, position:"right"};
       }
       else {
               return false;
       }
  }
}






function colision(element, secondelement) {
  const mapa = {

    l:false,
    r:false,
    b:false,
    t:false

  };
    const el = element.offsetLeft;
    const et = element.offsetTop;
    const er = element.offsetLeft + element.offsetWidth;
    const eb = element.offsetTop + element.offsetHeight;
    const at = secondelement.offsetTop;
    const ar = secondelement.offsetLeft + secondelement.offsetWidth;
    const ab = secondelement.offsetTop + secondelement.offsetHeight;
    const al = secondelement.offsetLeft;
    const thispointleft = element.offsetLeft - secondelement.offsetLeft;
    const thispointtop = element.offsetTop - secondelement.offsetTop;


    const method1 = eb > at && ab > et && ar > el && er - element.offsetWidth > al  ;
    const method2 = eb > at && ab > et && er > al && ar > el + element.offsetWidth;
    const method3 = eb > at && ar > el && er > al && ab > et + element.offsetHeight;
    const method4 = ab > et && ar > el && er > al && eb - element.offsetHeight > ar;
    //console.log(method1, method2, method3, method4);
    if (  method1 && method2 && method3 && !method4  ) {
      return {colisionelement:secondelement, element:element, direction:thispointleft, position:"top"} ;
    }
    else if (  method1 && method2 && !method3 && !method4  ) {
      return {colisionelement:secondelement, element:element, direction:thispointleft, position:"bottom"} ;
    }
    else if (  !method1 && method2 && method3 && !method4  ) {
      return {colisionelement:secondelement, element:element, direction:thispointtop, position:"right"} ;
    }
    else if (  method1 && !method2 && method3 && !method4  ) {
      return {colisionelement:secondelement, element:element, direction:thispointtop, position:"left"} ;
    }
    else {
        return {colisionelement:false, element:false, direction:false, position:false};
    }

}
