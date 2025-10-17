import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function RangoView({rangoData}) {

  return (
    <>
    <div>
        <DataTable value={rangoData} paginator rows={5} tableStyle={{ minWidth: '50rem' }}>
            <Column field="nombre" header="Rango"></Column>
        </DataTable>

        

    </div>
    </>
  )
}

export default RangoView
