import { fetchProducts } from "@/actions";
import { ProductType } from "@/types";
import Product from "./Components/Product";
import { auth } from "@/auth";
import { Session, User } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const products = await fetchProducts();

    const getSessions: Session | null = await auth();

    if (!getSessions) {
        redirect("/login");
    }

    return (
        <>
            <main className="py-[2vh] px-[4vw] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[1vw]">
                {products.success &&
                    products.data.map((product: ProductType) => {
                        return <Product key={product.id} product={product} />;
                    })}
            </main>
        </>
    );
}
