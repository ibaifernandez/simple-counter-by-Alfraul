import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

//render your react application

let counter = 0;
function tick() {
    counter++;
    let arraycounter = counter.toString().padStart(6, 0).split("");
    const element = (
        <div className="d-flex bg-dark justify-content-center p-3 text-white">
            <div className="d-flex align-items-center p-3 mx-1 fs-2">
                <i class="fa-solid fa-clock"></i>
            </div>
            {arraycounter.map((count, i) => (
                <div
                    key={i}
                    className="p-3 rounded bg-secondary d-flex flex-column align-items-center mx-1 fs-1"
                >
                    {" "}
                    {count}
                </div>
            ))}
        </div>
    );
    ReactDOM.render(element, document.querySelector("#app"));
}

setInterval(tick, 1000);
