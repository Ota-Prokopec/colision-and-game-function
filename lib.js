



class Elementevent {

             constructor(element, e, callback) {
               this.element = element;
               this.e = e;
               //this.onwhat = onwhat;
               this.callback = callback;
             }

//////////////////////////////////////////////////////////////////

                       move = (wrap = window) => {
                                      wrap.addEventListener(this.e, this.fune);


                                                    }
/////////////////////////////////////////////////////////////////////////////


removeevent = (wrap = window) => {

                     wrap.removeEventListener(this.e, this.fune);

              }



//////////////////////////////////////////////////////////////////////



fune = () => {
                 this.callback();
                 this.element.style.left = event.x + "px";
                 this.element.style.top = event.y + "px";
                 //this.colision(this.colisionEl, this.colisionCallback);

              }

              //////////////////////////////////////////////////////////////////

colision(el, isarrayiscolision, callback) {
  let jecolision;
  if (isarrayiscolision === "array") {
     jecolision = colisioninarray(this.element, el);
  }
  else
  {
     jecolision = colision(this.element, el);
  }
     if (jecolision !== true) {
          callback(jecolision);
     }
     else {
      return false;
     }

}






}
let y = 0;
let x = 0;
let e = new Elementevent(document.getElementById("element"), "mousemove",() => {

  this.element.style.left = event.x + "px";
  this.element.style.top = event.y + "px";
  e.colision(document.getElementById("el"), "", function (informace) {
    console.log(informace.position);

  });
  });

e.move(window
);
