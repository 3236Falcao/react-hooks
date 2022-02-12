import React, { useState } from "react";

function Exemplo04_useState (){
    //Modelo(Json)
    const modelo = {nome:'', email:'', cidade:''}

    //useState
    const [formulario, setFormulario]  = useState(modelo);

    //Evento
    const evento = (e) => {
        let nome = e.target.name;
        let valor = e.target.value;

        setFormulario({...formulario, [nome]:valor});
    }

    return(
        <div>
            <input type='text' name='nome'  placeholder='informe o nome'  onChange={evento}/>
            <input type='text' name='email' placeholder='informe o e-mail' onChange={evento}/>
            <input type='text' name='cidade' placeholder='informe o Cidade' onChange={evento}/>

            <p>{formulario.nome}</p>
            <p>{formulario.email}</p>
            <p>{formulario.cidade}</p>
        </div>
    );
}

export default Exemplo04_useState;