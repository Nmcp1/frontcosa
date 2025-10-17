const localkey = "warrior_list_data";
const createWarrior = (warrior) => {
    let lista = [];
    const data = localStorage.getItem(localkey);

    if (data!=null){
        lista = JSON.parse(data);
    }

    lista = [...lista,warrior];
    localStorage.setItem(localkey,JSON.stringify(lista));
}

const getWarrior = () =>{
    const data = localStorage.getItem(localkey);
    if (data != null){
        return JSON.parse(data);
    }
    return [];
}

export {createWarrior, getWarrior};