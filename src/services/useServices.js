import config from './config.json';
import axios from 'axios';


// export const registerUser = user => {
//     return axios.post(
//         `${config.toplearnapi}/api/register`,
//         JSON.stringify(user)
//     );
// };

export const testformforloginorno = () => {
    return axios.get(
        `${config.apijasonplaceholder}`
    )
}