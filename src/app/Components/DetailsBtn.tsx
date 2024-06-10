import { goToDetail } from "@/actions";
import React from "react";

type Props = {
    id: number;
};

function DetailsBtn(props: Props) {
    const { id } = props;

    return (
        <form action={goToDetail} className="justify-self-center">
            <input type="hidden" name="id" value={id} />
            <button type="submit" className="btn btn-sm btn-primary ">
                Details
            </button>
        </form>
    );
}

export default DetailsBtn;
