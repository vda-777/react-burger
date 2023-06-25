const ApiConfig = {
    baseUrl: "https://norma.nomoreparties.space/api",
};
const getResponse = (response) => {
    if(response.ok){
        return response.json();        
    }
    return Promise.reject(`Ошибка HTTP: статус - ${response.status} описание - ${response.statusText}`);
};
export const get = () => {
    return fetch(`${ApiConfig.baseUrl}/ingredients`).then(getResponse);
};
export const post = (data) => {
    return fetch(`${ApiConfig.baseUrl}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(getResponse);
};