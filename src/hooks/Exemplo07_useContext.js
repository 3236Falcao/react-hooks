//manipulando elementos entre componentes com useContext

import React, {createContext, useContext} from "react";

// criar contexto
const Contexto =  createContext();

function Principal(){

    let texto = 'Enviando informações';

    return( 
        <Contexto.Provider value={{texto}}>       
        <Camada1/>
        </Contexto.Provider>
    );
}

//Camada 1
function Camada1(){
    return(
        <div style={{backgroundColor:'red', width:'500px', heigh: '500px', display:'inline-block'}}>         
        <Camada2/>
        </div>
    );
}


//Camada 2
function Camada2(){
    return(
        <div style={{backgroundColor:'green', width:'400px', margin: '50px', heigh: '400px',display:'inline-block' }}>
        <Camada3/>
        </div>
    );
}


//Camada 3
function Camada3(){

    const {texto} = useContext(Contexto);

    return(
        <div style={{backgroundColor:'yellow', width:'300px', heigh: '300px', margin: '50px'}}>
            <p>{texto}</p>
        </div>
    );
}

export default Principal;