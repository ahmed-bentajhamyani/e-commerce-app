import axios from "axios";
import { Product } from "../types/Product";

const ProductService = {
    URL: '/data/',

    getProducts: async function () {
        return await axios.get(this.URL + 'products.json');
    },

    getProduct: async function (id: number) {
        return await axios.get(this.URL + 'products.json')
            .then(res => {
                return res.data.find((p: Product) => p.id === id);
            });
    },

    getProductsByCategory: async function (category_id: number) {
        return await axios.get(this.URL + 'products.json')
            .then(res => {
                return res.data.filter((p: Product) => p.category_id === category_id);
            });
    },

    getGategories: async function () {
        return await axios.get(this.URL + 'categories.json');
    },

    getCategory: async function (id: number) {
        return await axios.get(this.URL + 'categories.json')
            .then(res => {
                return res.data.find((c: { id: number; }) => c.id === id);
            });
    },
};

export default ProductService;