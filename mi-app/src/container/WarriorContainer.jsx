import { useState } from 'react'
import React, {useEffect} from 'react'
import RangoForm from '../components/RangoForm'
import RangoView from '../components/RangoView'
import { createRango } from '../services/RangoService'
import { createWarrior } from '../services/WarriorService'
import { getRango } from '../services/RangoService'
import { getWarrior } from '../services/WarriorService'
import WarriorForm from '../components/WarriorForm'
import WarriorView from '../components/WarriorView'

function WarriorContainer() {

    const [rangoData, setRangoData] = useState([]);
    const [warriorData, setWarriorData] = useState([]);

    useEffect(() => {
        // Cargar datos iniciales al montar el componente
        const data = getRango();
        setRangoData(data);
        const data2 = getWarrior();
        setWarriorData(data2);
    }, []);


    const handleCreate = (rango) =>{
        createRango(rango);
        const updatedList = getRango(); // Recargar datos desde localStorage
        setRangoData(updatedList);
    }
    const handleCreate2 = (warrior) =>{
        createWarrior(warrior);
        const updatedList = getWarrior(); // Recargar datos desde localStorage
        setWarriorData(updatedList);
    }
  return (
    <>
    <div className="row">
    <div className="col-5">
        <div className="row">
            <h1>Ingrese Nuevo Rango</h1>
            <RangoForm onCreateRango={handleCreate}/>
        </div>
        <div className="row">
            <RangoView rangoData={rangoData}/>
        </div>
    </div>
    <div className="col-2"></div>
    <div className="col-5">
        <h1>Ingrese Nuevo Guerrero</h1>
        <div className="row">
            <WarriorForm rangoData={rangoData} onCreateWarrior={handleCreate2}/>
        </div>
        <div className="row">
            <WarriorView warriorData={warriorData}/>
        </div>


    </div>
    </div>
      
    </>
  )
}

export default WarriorContainer
