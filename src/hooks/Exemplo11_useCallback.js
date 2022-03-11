import React, { useState, useEffect, useCallback } from "react";

function Exemplo11_useCallback() {

    //useState declara a variavel cor
    const [cor, setCor] = useState('blue');

    //funcao para alterar a cor
    const alterarCor = () => {
        setCor(cor === 'blue' ? 'gray' : 'blue');
    }
    return (       
        <div style={{backgroundColor:cor}}>
            <button onClick={alterarCor}>Alterar Cor</button>
        </div>       
    );
}

export default Exemplo11_useCallback;