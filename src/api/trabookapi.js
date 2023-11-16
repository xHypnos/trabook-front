const getCards = async() => {
    try{
        const response = await fetch('http://127.0.0.1:8000/api/cards/');
        if(!response.ok){
            throw new Error("Error al conectar con api");
        }
        const data = await response.json();
        return data;
    } catch(e){
        console.error('Error: ', e.message);
    }
};

export {getCards};