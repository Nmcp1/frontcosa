const localkey = "rango_list_data";
const createRango = (rango) => {
    let lista = [];
    const data = localStorage.getItem(localkey);

    if (data!=null){
        lista = JSON.parse(data);
    }

    lista = [...lista,rango];
    localStorage.setItem(localkey,JSON.stringify(lista));
}

const getRango = () =>{
    const data = localStorage.getItem(localkey);
    if (data != null){
        return JSON.parse(data);
    }
    return [];
}

export {createRango, getRango};