import { fetchProduct, fetchProducts } from "@/actions";
import { ProductType } from "@/types";
import Image from "next/image";
import AddToCartBtn from "../Components/AddToCartBtn";

// export async function generateStaticParams() {
//     const products = await fetchProducts();

//     return products.data.map((product: ProductType) => ({
//         id: product.id.toString(),
//     }));
// }

async function SingleProduct({ params }: { params: { id: number } }) {
    const { id } = params;
    const result = await fetchProduct(id);

    if (result.success === true) {
        const { product }: { product: ProductType } = result;
        const { title, thumbnail, images, description, price } = product;

        return (
            <div className=" grid md:grid-cols-2 border-[1px] border-accent shadow-md shadow-accent rounded-md my-[2vh] mx-[4vw]">
                <div className="grid grid-rows-[1fr,100px] py-[2vh] px-[4vw] ">
                    <figure
                        className={` relative aspect-square border-[1px] border-accent shadow-md shadow-accent rounded-md`}
                    >
                        <Image
                            src={thumbnail}
                            alt={title}
                            fill
                            sizes="(min-width: 808px) 50vw, 100vw"
                            style={{
                                objectFit: "cover", // cover, contain, none
                            }}
                            priority
                        />
                    </figure>
                    <div className=" flex gap-[1vw] py-[2vh] px-[4vw] ">
                        {images.map((image, ind) => {
                            return (
                                <figure
                                    key={ind}
                                    className=" relative aspect-square border-[1px] border-accent shadow-sm shadow-accent rounded-md"
                                >
                                    <Image
                                        src={image}
                                        alt={image}
                                        fill
                                        sizes="(min-width: 70px) 10vw, 20vw"
                                        style={{
                                            objectFit: "cover", // cover, contain, none
                                        }}
                                    />
                                </figure>
                            );
                        })}
                    </div>
                </div>
                <div className=" grid place-content-start gap-[2vh] my-[2vh] mx-[4vw] border-accent shadow-md shadow-accent rounded">
                    <p
                        className=" font-semibold text-xl "
                        style={{ fontVariant: "small-caps" }}
                    >
                        {title}
                    </p>
                    <p>{description} </p>
                    <p>
                        {price} <span className=" text-sm">$</span>{" "}
                    </p>
                    <AddToCartBtn product={product} />
                </div>
            </div>
        );
    }
}

export default SingleProduct;
