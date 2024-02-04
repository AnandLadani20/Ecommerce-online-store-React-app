import Api from '../api/Api'

const ENDPOINT = "/products";

const getAllProduct = async (params) => {
    const url = `${ENDPOINT}`;
    return Api.get(url, { params }).then((res) => {
        return res;
    })
}

const limitedProduct = async (params) => {
    const url = `${ENDPOINT}?limit=10`;
    return Api.get(url, {params}).then((res) => {
        return res;
    })
}

const categProduct = async (params) => {
    const url = `${ENDPOINT}/categories`;
    return Api.get(url, {params}).then((res) => {
        return res;
    })
}

const getSelectedProduct = async(productId) => {
   
    const url = `${ENDPOINT}/${productId}`;
    return Api.get(url).then((res)=>{
        return res;
    })
}

const specifyCategory = async(productName) =>{
    if(productName){
        const url = `products/category/${productName}`;
        return Api.get(url).then((res)=>{
            return res;
        })
    }else {
        const url = `${ENDPOINT}`;
        return Api.get(url).then((res) => {
            return res;
        }) 
    }

   
}

const productService =  {
    getAllProduct,
    limitedProduct,
    categProduct,
    getSelectedProduct,
    specifyCategory
}
export default productService;