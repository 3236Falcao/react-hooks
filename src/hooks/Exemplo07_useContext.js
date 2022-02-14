//manipulando elementos entre componentes com props

import React from "react";

function Principal(){

    let texto = 'Enviando informações';

    return(        
        <Camada1 texto={texto}/>
    );
}

//Camada 1
function Camada1({texto}){
    return(
        <div style={{backgroundColor:'red', width:'500px', heigh: '500px', display:'inline-block'}}>         
        <Camada2 texto={texto}/>
        </div>
    );
}


//Camada 2
function Camada2({texto}){
    return(
        <div style={{backgroundColor:'green', width:'400px', margin: '50px', heigh: '400px',display:'inline-block' }}>
        <Camada3 texto={texto}/>
        </div>
    );
}


//Camada 3
function Camada3({texto}){
    return(
        <div style={{backgroundColor:'yellow', width:'300px', heigh: '300px', margin: '50px'}}>
            <p>texto</p>
        </div>
    );
}

export default Principal;