function welcome(){
  console.log("Welcome");
}
var id1=setTimeout(welcome,1000);
var id2 = setTimeout(welcome, 1000);
// clearTimeout(id1);
clearInterval(id2);