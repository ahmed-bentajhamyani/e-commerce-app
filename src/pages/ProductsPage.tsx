import SelectBox from "@/components/SelectBox";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import WidgetFilter from "../components/WidgetFilter";
import ProductService from "../services/ProductService";
import { Product } from "../types/Product";

export default function ProductsPage() {
  const params = useParams();
  const [categoryId, setCategoryId] = useState(9);
  const [products, setProducts] = useState<Product[]>([]);
  const [color, setColor] = useState("ALL");
  const [sort, setSort] = useState("");

  useEffect(() => {
    ProductService.getCategoryByName(params.category?.toUpperCase() || "").then(
      (res) => {
        setCategoryId(res.id);
      }
    );
  }, [params]);

  useEffect(() => {
    ProductService.getProductsByCategory(categoryId).then((res) =>
      setProducts(res)
    );
  }, [categoryId]);

  const _products = useMemo(() => {
    if (sort === "HL") {
      return color === "ALL"
        ? [...products].sort((a, b) => b.price - a.price)
        : [...products]
            .filter((item) => item.color === color)
            .sort((a, b) => b.price - a.price);
    } else if (sort === "LH") {
      return color === "ALL"
        ? [...products].sort((a, b) => a.price - b.price)
        : [...products]
            .filter((item) => item.color === color)
            .sort((a, b) => a.price - b.price);
    }
    return color === "ALL"
      ? products
      : [...products].filter((item) => item.color === color);
  }, [color, products, sort]);

  return (
    <section className="w-full flex flex-col justify-center">
      <div className="w-full flex flex-col gap-4 bg-bg-secondary font-playfair-display uppercase font-semibold py-5 justify-center items-center">
        <p className="">{params.category}</p>
        <p className="font-poppins font-normal lowercase text-xs opacity-80">
          men / new clothing /
          <span className="opacity-80">{params.category}</span>
        </p>
      </div>
      <div className="w-full flex sm:grid grid-cols-6 justify-center">
        <div className="col-span-1">
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
              "MULTICOLOR",
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
        <div className="flex flex-col col-span-5">
          <div className="flex w-full justify-end">
            <div className="flex w-3/4 sm:w-1/2 lg:w-1/4 justify-end mr-2 md:mr-10 my-6 transition-all duration-300">
              <SelectBox setSort={setSort} />
            </div>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 mb-8">
            {_products.length > 0
              ? _products.map((item) => (
                  <ProductCard
                    key={item.id}
                    data={item}
                    style="max-w-[260px] 2xl:max-w-[350px]"
                  />
                ))
              : null}
          </div>
          {_products.length === 0 ? (
            <div className="flex-1 text-center self-center">
              <p>No products of color {color} in stock at the moment.</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
