import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import { useEffect, useMemo, useState } from "react";
import { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import WidgetFilter from "../components/WidgetFilter";

export default function ProductsPage() {
  const params = useParams();
  const [categoryId, setCategoryId] = useState(9);
  const [products, setProducts] = useState<Product[]>([]);
  const [color, setColor] = useState("ALL");

  useEffect(() => {
    ProductService.getCategoryByName(
      params.category?.toUpperCase() || "FOOTWEAR"
    ).then((res) => setCategoryId(res));
    ProductService.getProductsByCategory(categoryId).then((res) =>
      setProducts(res)
    );

    return () => {};
  }, []);

  const _products = useMemo(() => {
    return color === "ALL"
      ? products
      : products.filter((item) => item.color === color);
  }, [color, products]);

  return (
    <section className="w-full flex justify-center">
      <div className="">
        <WidgetFilter
          title="color"
          sub={[
            "ALL",
            "AZURE",
            "BEIGE",
            "BLACK",
            "BLUE",
            "BORDEAUX",
            "BROWN",
            "DENIM",
            "DOVE",
            "FUCHSIA",
            "GREEN",
            "GREY",
            "IVORY",
            "MULTICOLOUR",
            "ORANGE",
            "PINK",
            "PURPLE",
            "RED",
            "WHITE",
            "YELLOW",
          ]}
          onColorChange={(value) => setColor(value)}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8">
        {_products.length > 0
          ? _products.map((item) => (
              <ProductCard key={item.id} data={item} style="max-w-[260px]" />
            ))
          : null}
      </div>
      {_products.length === 0 ? (
        <div className="flex-1 text-center self-center">
          <p>No products of color {color} in stock at the moment.</p>
        </div>
      ) : null}
    </section>
  );
}
