var num = 1;
function adelante() {
    num++;
    if (num>10) 
        num=1;
        var foto=document.getElementById("foto");
        foto.src="../PracticaGaleria/img/foto"+num+".jpg";    
    
}
function atras() {
    num--;
    if (num<1) 
        num=10;
        var foto=document.getElementById("foto");
        foto.src="../PracticaGaleria/img/foto"+num+".jpg";    
    }