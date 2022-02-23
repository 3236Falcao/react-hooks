import React, { useRef } from "react";

function Examplo08_useRef() {

    //Objeto para trabalhar com useRef

    const elemento = useRef();

    //Função

    const acao = () => {

        //o current serve para acessar as caracteristicas  do input

        elemento.current.focus();
        elemento.current.style.backgroundColor = 'red';
        elemento.current.value = 'Digite algo...';

    }

    return (

        <div>

            <input type='text' ref={elemento} />

            <input type='button' value='Clique aqui' onClick={acao} />

        </div>

    );

}

export default Examplo08_useRef;