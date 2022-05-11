import axios from 'axios';

export const fetcher = (url : string)=>axios.get(url, {withCredentials : true})
    .then((response) => response.data);

// export const fetcherBook = ()=>axios.get('/api/v1/teams/2/book', {withCredentials : true})
//     .then((respone)=>{
        
//     });