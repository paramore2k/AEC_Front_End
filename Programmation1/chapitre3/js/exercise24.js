/*
Trouver tout les nombres Armstrong de moins de 1000
 */
document.writeln('Voici les nombres armstrong en dessous de 1000');
for (var a=1;a<10;a++){

    for (var b=0;b<10;b++){

        for (var c=0;c<10;c++){

            var armstrong = (Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3));
            var armstrong2 = (a*100 + b * 10 + c);
            if (armstrong === armstrong2){
                document.write('<ul><li>'+ armstrong +'</li></ul>');
            }
        }
    }
}