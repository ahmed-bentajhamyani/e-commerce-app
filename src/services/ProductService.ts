import axios from "axios";

const ProductService = {
    URL: '/data/',

    getProducts: async function () {
        return await axios.get(this.URL + 'products.json');
    },

    getGategories: async function () {
        return await axios.get(this.URL + 'categories.json');
    }
};

export default ProductService;