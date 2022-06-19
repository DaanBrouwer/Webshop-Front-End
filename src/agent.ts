import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'https://localhost:5001/api';
axios.defaults.withCredentials = true;
const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body:{}) => axios.post(url, body).then(responseBody),
    put: (url: string, body:{}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const ProductList = {
    list: () => request.get('products'),
    details: (id: number) => request.get(`products/${id}`)
}

const Basket = {
    get: () => request.get('basket'),
    addItem: (productId: number, quantity = 1) => request.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
    removeItem: (productId: number, quantity = 1) => request.delete(`basket?productId=${productId}&quantity=${quantity}`)
}


const agent = {
    ProductList,
    Basket
}
export default agent;