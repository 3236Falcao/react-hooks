//Importar módulo React e o hook useState
import React, { useState } from "react";

//Função
function Exemplo01_useState(){

    //useState - É uma variável dinâminca.
    //const [nomedostate, funcaoAtribuiValorState] = useState();
    const [texto, setTexto] = useState('Hello World!');

    //Evento
    //A letra e serve para representar o evento disparado e o elemento HTML disparou esse evento
    const evento = (e) => {
        //Função que seta o valor do HTML que está sendo enviado
        setTexto(e.target.value);

    }

    //Retorno de um campo de texto onde o texto digitado é apresentado em tempo de execução    
    return(
        <div>            
            <input type='text' onChange={evento} />
            <p>{texto}</p>
        </div>
    );

}

//Exportar
export default Exemplo01_useState;