import React from "react";

const Education = () => {

    return (
        <section className="padding" id="education">
        <h2 style={{ textAlign: "center" }}>Education</h2>
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
            <div style={{ maxWidth: "40%", alignSelf: "center"}}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1r_rt3iAZcG23mrhqAQz4pc2bvKmptgpF8xJB-QrT-g&s"
                alt="CUHKSZ Logo"
                style={{ width: "100%", height: "auto" }}
            />
            </div>
            <div style={{ maxWidth: "60%", alignSelf: "center" }}>
            <h3>The Chinese University of Hong Kong, Shenzhen</h3>
            <p>
                B.Sc in Data Science and Big Data Technology (2022-2026)
            </p>
            </div>
        </div>
        </section>
    );
}

export default Education;

