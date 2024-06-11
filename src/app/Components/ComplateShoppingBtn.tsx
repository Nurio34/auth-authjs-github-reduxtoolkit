import React from "react";

function ComplateShoppingBtn({ total }: { total: number }) {
    return (
        <button className="btn btn-primary">
            Total : {total.toFixed(2)} $
        </button>
    );
}

export default ComplateShoppingBtn;
