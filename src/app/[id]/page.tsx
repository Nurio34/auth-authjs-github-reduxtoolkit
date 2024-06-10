import Product from "../Components/Product";

async function SingleProduct({ params }: { params: { id: number } }) {
    console.log({ params });
    const { id } = params;
    const productAPI_Url = `https://dummyjson.com/products/${id}`;

    try {
        const result = await fetch(productAPI_Url);
        const product = await result.json();
        return <Product product={product} />;
    } catch (error) {
        return {
            success: false,
            msg: "Unexpected error while 'Fetching Single Product'",
        };
    }
}

export default SingleProduct;
