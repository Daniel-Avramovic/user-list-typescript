import Axios from 'axios';


export const getUsers = async (url:string) => {
    return await Axios.get(url).then((res:any) => {
        return res.data;
    })
};