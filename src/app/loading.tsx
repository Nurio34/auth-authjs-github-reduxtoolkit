import React from "react";

function Loading() {
    return (
        <>
            <main className="py-[2vh] px-[4vw] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[1vw]">
                {Array(30)
                    .fill("N")
                    .map((item, ind) => {
                        return (
                            <div
                                key={ind}
                                className=" bg-base-300 shadow-md shadow-accent rounded-md border-[1px] border-accent grid gap-[1vh] py-[1vh] px-[2vw]"
                            >
                                <figure className="relative aspect-square"></figure>
                                <p className=" truncate"> </p>
                                <form action="" className="justify-self-center">
                                    <button
                                        type="submit"
                                        className="btn btn-sm btn-ghost "
                                    ></button>
                                </form>
                            </div>
                        );
                    })}
            </main>
        </>
    );
}

export default Loading;
