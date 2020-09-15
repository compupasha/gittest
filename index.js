
/*document.write("Hey<br>");
document.write("<i>Hello again</i><br>");

let x="Yahoo baba"
document.write(x);
document.writeln(x);
document.writeln(typeof(x));*/

/*console.warn("there is something wrong");
console.warn("there is something wrong");
console.warn("there is something wrong");*/

var x = 15;

while(x <= 30){
    document.write(x+") x is smaller<br>");
    x++;
}

do{
    document.write(x+") x is smaller<br>");
    x++;
}while(x <= 50)

for(x=1; x <= 50; x++){
    document.write(x+") x is smaller<br>");
}

for(x=1; x <=100; x++){
    if(x %2 !=0){
        document.write(x +"<br>");
    }

/*for(var a=1; a<=100; a= a+10){
    for(var b=a; b< a+10; b++){
        document.write(b +" ");
    }
        document.write("<br>");

}*/
}

for (var a =1; a<=9; a++){
    for (var b=1; b <=a; b++){
        document.write(a + " ");
    }
    document.write("<br>");
}

for (var a =9; a>=1; a--){
    for (var b=1; b <=a; b++){
        document.write(a + " ");
    }
    document.write("<br>");
}


for (var a =9; a>=1; a--){
    for (var b=a; b >=1; b--){
        document.write(b + " ");
    }
    document.write("<br>");
}

var a=[1,2,3,4,5,6,7,8,9] ;
document.write(a+ ' ');
a.reverse();
document.write("<br>");
document.write(a+ ' ');
a.push(56);
document.write("<br>");
document.write(a+ ' ');
a.pop();
document.write("<br>");
document.write(a+ ' ');
a.shift();
a.unshift(66);
document.write("<br>");
document.write(a+ ' ');
var b = a.concat(34,56);
document.write("<br>");
document.write(b+ ' ');
var c = a.concat(b);
document.write("<br>");
document.write(c + ' ');
var s = a.slice(-3,-1);
document.write("<br>");
document.write(s);
a.splice(2,2,"Neha","karan");
document.write("<br>");

document.write("<br>");git 
document.write(a);


