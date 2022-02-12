import React, { useState, useEffect } from "react";

function Exemplo05_useEffect(){  

    //useState
    const [texto, setTexto]  = useState('Hello world!');

    //useEffect irá atualizar o texto após 5 segundos
    useEffect(() => {

        setInterval(() => {            
            setTexto('useEffect executado com sucesso!');
        }, 5000);

    });

    return(
       <h1>{texto}</h1>
    );
}

export default Exemplo05_useEffect;