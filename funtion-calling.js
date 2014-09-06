Function.prototype.myBind(context) {
  var fn = this; //this is instance of function f
  return function() {
    return fn.apply(context);
  };
};

var f = function(){
  console.log(this.name)
}
//create an object called "gizmo"
gizmo = {name: "gizmo"}
//f.myBind(gizmo) return below: 
// return function() {
//   return fn.apply(context);
// };
// so g equal to this returned function
var g = f.myBind(gizmo)
// so calling print out gizmo, this ths the mehtod calling
g()