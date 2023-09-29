const calendario=document.getElementById("calendario");
let mes=Date(2023, 8,1,0,0)
function crearCalendario(){
    let esteMes=mes;

    for(i=1;i<=mes.getDate();i++){
        let casilla=document.createElement("div");
        if(esteMes.getDay()==0){
            casilla.innerHTML=`<br><a> ${i} </a>`;
        }else{
            casilla.innerHTML=`<a> ${i} </a>`;
        }
        calendario.appendChild(casilla);
    }
}

crearCalendario();