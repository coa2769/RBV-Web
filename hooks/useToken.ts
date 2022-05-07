import useSWR from "swr";

// let token = '';

declare global {
    interface Window { 
        token : string,
        // count : number
    }
}

const useToken = (value : string | undefined)=>{
    const { data, mutate } = useSWR('token', ()=>window.token)

    if(value !== undefined){
        window.token = value;
        mutate();
    }

    return {
        data : data || '',
        mutate: (tok : string)=>{
        window.token = tok;
        return mutate();
    }}
};

export default useToken;

// function useCounter(){
//     const { data, mutate } = useSWR("state", () => window.count);
//     return {
//       data: data || 0,
//       mutate: (count : number) => {
//         window.count = count;
//         mutate();
//       }
//     };
// }

// export default useCounter;