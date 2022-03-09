import React, { useMemo, useState } from "react";

function Exemplo10_useMemo() {

    const [contador, setContador] = useState(0);

    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={e => setContador(contador + 1)}>Incrementar</button>           
        </div>
    );
}

export default Exemplo10_useMemo;