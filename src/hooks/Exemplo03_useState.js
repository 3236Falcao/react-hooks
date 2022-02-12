import React, { useState } from "react";

function Exemplo03_useSate(){
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);

    //Calculo da média
    let media = ( nota1 + nota2 ) / 2;

    let situacao = media >= 7 ? 'Aprovado(a)' : 'Reprovado(a)';

    return(
        <div>
            <input type='number' placeholder='Primeira nota' onChange={e => setNota1(parseFloat(e.target.value))} />
            <input type='number' placeholder='Segunda nota' onChange={e => setNota2(parseFloat(e.target.value))} />

            {nota1 && nota2 ? <h1>{situacao} com média {media}</h1> : ''}
        </div>
    );
}

export default  Exemplo03_useSate;