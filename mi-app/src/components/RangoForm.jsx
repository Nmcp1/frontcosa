import React, {useState} from 'react'
import {Button} from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function RangoForm({onCreateRango = () => {}}) {
    const handleClick = ()=>{
        const rangoObj = {nombre};
        onCreateRango(rangoObj);
    }

    const [nombre, setNombre] = useState("");


  return (
    <div>
      <InputText id={nombre} value={nombre} onChange={(e) => setNombre(e.target.value)} ></InputText>
      <Button onClick={handleClick} label="Registrar" ></Button>
      
    </div>
  )
}

export default RangoForm
