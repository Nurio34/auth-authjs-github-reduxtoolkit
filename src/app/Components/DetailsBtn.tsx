import { goToDetail } from "@/actions";
import React from "react";

type Props = {
    id: number;
    amount: number;
};

function DetailsBtn(props: Props) {
    const { id, amount } = props;

    return (
        <form action={goToDetail} className="justify-self-center">
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="amount" value={amount} />
            <button type="submit" className="btn btn-sm btn-primary ">
                Details
            </button>
        </form>
    );
}

export default DetailsBtn;
