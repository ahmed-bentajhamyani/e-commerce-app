import axios from "axios";

const ProductService = {
    URL: 'https://e-commerce-sqli-api-1.vercel.app',

    getProducts: async function () {
        return await axios.get(this.URL + '/products');
    },

    getProduct: async function (id: number) {
        return await axios.get(this.URL + '/products/'+id)
            .then(res => {
                return res.data;
            });
    },

    getProductsByCategory: async function (category_id: number) {
        return await axios.get(this.URL + '/products/cat/'+ category_id)
            .then(res => {
                return res.data;
            });
    },

    getCategories: async function () {
        return await axios.get(this.URL + '/categories');
    },

    getCategory: async function (id: number) {
        return await axios.get(this.URL + '/categories/'+id)
            .then(res => {
                return res.data;
            });
    },

    getCategoryByName: async function (name: string) {
        return await axios.get(this.URL + '/categories/name/'+name.toLowerCase())
            .then(res => {
                return res.data;
            });
    },
};

export default ProductService;