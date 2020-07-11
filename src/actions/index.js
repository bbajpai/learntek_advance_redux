const URL_ROOT = 'http://localhost:3004';

export function getCars(keywords){
    console.log(`Received data from ${keywords} serach.js `);
    console.log(`${URL_ROOT}/carsIndex?q=${keywords}`);

    const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`, 
        {method:'GET'})
        .then(response =>response.json());

    return{
        type:'SEARCH_CARS',
        payload:request
    }
}


export function carDetail(id){
        const request = fetch(`${URL_ROOT}/carsIndex?id=${id}`, {method:'GET'})
        .then(response => response.json() )
        console.log(request);

        return{
            type:'CAR_DETAILS',
            payload:request
        }
}