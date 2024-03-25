import { useParams } from "react-router-dom";
import ProductService from "@/services/ProductService";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    image: string;
    product_name: string;
    description: string;
    style_id: string;
    price: number;
    quantity: number;
    color: string;
    category_id: number;
}

export default function SearchPage() {


    const [products, setProducts] = useState<Product[]>()
    const params = useParams();
    

    useEffect(() => {

        if (params.key)
        {
            ProductService.getProducts().then((re)=>{
            setProducts(re.data.filter((item : Product )=>{
            if (params.key)
            {
                if (item.product_name.includes(params.key.toUpperCase()) || item.description.includes(params.key.toUpperCase()))
                    return (item);
                }
            }))
            }
            )
        }
    });
    


    return(
        <section>
        <div className="flex items-center justify-center text-[27px]">
            <p>results of <span className=" text-cyan-800">{params.key}</span> .</p>
        </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
          {products && products.length > 0
            ? products.map((item) => (
                <ProductCard key={item.id} data={item} style="max-w-[260px]" />
              ))
            : null}
        </div>
        {products && products.length === 0 ? (
          <div className="flex-1 text-center self-center">
            <p>No products of name {params.key} in stock at the moment.</p>
          </div>
        ) : null}
        </section>
    );
}
