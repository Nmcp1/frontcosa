import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function WarriorView({warriorData}) {
    const rangoBodyTemplate = (rowData) => {
    return rowData.rango?.nombre || '';  // Si no existe rango, muestra vacío
  };


  return (
    <>
    <div>
        <DataTable value={warriorData} paginator rows={5} tableStyle={{ minWidth: '50rem' }}>
            <Column field="nombre" header="Rango"></Column>
            <Column header="Rango" body={rangoBodyTemplate}></Column>
        </DataTable>

        

    </div>
    </>
  )
}

export default WarriorView
