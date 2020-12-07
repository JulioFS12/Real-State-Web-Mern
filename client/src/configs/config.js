const URL_API = 'http://localhost:5000/';

export const fetchWithoutToken = (endPoint, data, method = 'GET') => {
    
    const URL = `${URL_API}${endPoint}`;

    if(method === 'GET'){
        return fetch( URL);
    } else {
        return fetch(
            URL, {
                Headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify( data )
            }
        )
    }
}