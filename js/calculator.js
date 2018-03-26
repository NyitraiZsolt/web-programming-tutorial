function countTo(n) {
    for (var i=1; i<=n; ) {
        console.info(i);
        i++;
    }

}
countTo(5);

function addNumbers(a , b){
    console.info("primul numar este"+a);
    console.info("al doilea numar este" + b);

    var suma=a; //este numarul cel mai mare
    var degete=b; //este numarul cel mai mic
    if (a<b) {
        suma=b;
        degete=a;
    }
    while(degete>0){
        degete--;     //il punem la a
        suma++;     //luam un deget de la b
        console.info(suma+'-au mai ramas '+degete+"degetele" );
    }
    console.info("suma este"+suma);
}
var count= addNumbers(8,5);