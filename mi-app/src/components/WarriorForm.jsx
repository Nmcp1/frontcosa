import React, { useState } from 'react'
import {Button} from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

function WarriorForm({onCreateWarrior = () => {},rangoData = []}) {
    const handleClick = ()=>{
        const warriorObj = {nombre, rango};
        onCreateWarrior(warriorObj);
        console.log(warriorObj)
    }

    const [nombre, setNombre] = useState("");
    const [rango, setRango] = useState("");
  return (
    <div>
    <div>
      <InputText id={nombre} value={nombre} onChange={(e) => setNombre(e.target.value)} ></InputText>
      <Dropdown value={rango} onChange={(e) => setRango(e.value)} options={rangoData} optionLabel="nombre" 
    placeholder="Selecciona un rango" className="w-full md:w-14rem" />

      <Button onClick={handleClick} label="Registrar" ></Button>
      
    </div>
    </div>
  )
}

export default WarriorForm
