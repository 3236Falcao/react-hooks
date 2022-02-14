//manipulando elementos entre componentes com useContext

import React, {createContext, useContext, useState} from "react";

// criar contexto
const Contexto =  createContext();

function Principal(){

    let texto = 'Enviando informações';

    //useState
    const [fundo, setFundo] = useState('yellow');

    const alterarFundo = () => {
        setFundo(fundo === 'yellow' ? 'blue' : 'yellow');
    }

    return( 
        <Contexto.Provider value={{texto, fundo , alterarFundo}}>       
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

    const {texto, fundo, alterarFundo} = useContext(Contexto);

    return(
        <div style={{backgroundColor:fundo, width:'300px', heigh: '300px', margin: '50px'}}>
            <p>{texto}</p>
            <button onClick={alterarFundo}>Clique aqui</button>
        </div>
    );
}

export default Principal;