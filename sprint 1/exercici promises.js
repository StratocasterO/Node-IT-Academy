/* Exercici proposat: una funció que retorni promeses que es resolen en un temps aleatori entre 0 i 5 segons. Executar-la 10 vegades de manera que podeu indentificar quina és l'ordre en el que s'han executat i el temps en el que s'han resolt, escrivint a un array les dues coses cada vegada que es resolgui una, algo de l'estil {num: 3, time: 2567}, de manera que a l'array contingui algo així:

{ num: 8, time: '515' } 
{ num: 7, time: '626' } 
{ num: 6, time: '867' } 
{ num: 9, time: '1047' } 
{ num: 1, time: '1402' } 
{ num: 0, time: '2864' } 
{ num: 2, time: '3153' } 
{ num: 5, time: '3789' } 
{ num: 4, time: '3948' } 
{ num: 3, time: '4004' } */


// Mostrant tot per consola:
function promise(num) {
    return new Promise((resolve, reject) => {
        var time = (5000 * Math.random()).toFixed(0);

        setTimeout(() => {
            resolve({ num, time });
        }, time);
    });
}

for (let i = 0; i < 10; i++) {
    var start = Date.now();
    console.log(start);
    promise(i).then((res) => console.log(res, Date.now() - start));
}


// Versió guardant tot a un array:
var array = []

for (let i = 0; i < 10; i++) {
    var j = 0;
    var start = Date.now()
    // console.log(start);
    promise(i)
        .then(res => {
            res.realTime = Date.now() - start;
            array.push(res);
            j++;
            if (j == 9) console.log(array);
        })
}