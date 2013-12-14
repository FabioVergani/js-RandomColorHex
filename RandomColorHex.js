//Optimized§5:
function RandomColorHex(){
 var a=[0,0,0,0,0];
 for(var i=5,m=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'],o=Math;i>-1;i--){a[i]=m[o.round(o.random()*15)]};
 return '#'+a.join('');
};
//
var c=RandomColorHex();
document.body.style.backgroundColor=c;
console.log(c,document.body.style.backgroundColor);
