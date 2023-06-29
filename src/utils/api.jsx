const ApiConfig = {
    baseUrl: "https://norma.nomoreparties.space/api",
};
const getResponse = (response) => {
    if(response.ok){
        return response.json();        
    }
    return Promise.reject(`Ошибка HTTP: статус - ${response.status} описание - ${response.statusText}`);
};
export const getIngredients = async () => {
    const response = await fetch(`${ApiConfig.baseUrl}/ingredients`);
    return getResponse(response);
};
export const createOrder = async (data) => {
    const response = await fetch(`${ApiConfig.baseUrl}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return getResponse(response);
};