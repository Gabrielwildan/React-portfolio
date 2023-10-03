import React from 'react'
import "./Works.css"
import portfolio1 from "../../assets/portfolio (1).jpg"
import portfolio2 from "../../assets/portfolio (2).jpg"
import portfolio3 from "../../assets/portfolio (3).jpg"
import portfolio4 from "../../assets/portfolio (4).jpg"
import portfolio5 from "../../assets/portfolio (5).jpg"
import portfolio6 from "../../assets/portfolio (6).jpg"

const Works = () => {
    return (
        <section id="works">
            <h2 className="works-title">My Portfolio</h2>
            <span className="works-desc"></span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero perferendis commodi corporis soluta nihil,<br />
            accusantium cumque quasi sapiente blanditiis repellendus asperiores iste dolorem dolores aliquid fugiat dicta non autem.
            <div className="works-imgs">
                <img src={portfolio1} alt="" className="works-img" />
                <img src={portfolio2} alt="" className="works-img" />
                <img src={portfolio3} alt="" className="works-img" />
                <img src={portfolio4} alt="" className="works-img" />
                <img src={portfolio5} alt="" className="works-img" />
                <img src={portfolio6} alt="" className="works-img" />
            </div>
            <button className="works-btn">
                More
            </button>
        </section>
    )
}

export default Works