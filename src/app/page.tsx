import { fetchProducts } from "@/actions";
import { ProductType } from "@/types";
import Product from "./Components/Product";

export default async function Home() {
    const products = await fetchProducts();

    return (
        <>
            <header className="py-[2vh] px-[4vw] shadow-lg shadow-primary ">
                Cart
            </header>
            <main className="py-[2vh] px-[4vw] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[1vw]">
                {products.success &&
                    products.data.map((product: ProductType) => {
                        return <Product key={product.id} product={product} />;
                    })}
            </main>
        </>
    );
}
