import { goToProducts } from "@/actions";

function GoToProductsBtn() {
    return (
        <form action={goToProducts} className="justify-self-end self-end">
            <button type="submit" className="btn btn-accent  ">
                Go Back
            </button>
        </form>
    );
}

export default GoToProductsBtn;
