import React from 'react'
import img1 from "../Assects/Wave_2.png"
export default function AboutUs() {
    return (
        <div>
            <session className="row">
                <div className="col-md-5 abt-cont" > 
                <h2 className="about"> ABOUT US</h2>
                <p>
                  Kay Bee Bio-organics Ltd. India's first ever manufacturer of
                  botanical based Bio-pesticides is a subsidiary company of Kay
                  Bee Exports which is Leading exporters of residue free &
                  organic products. Key products are Pomegranates, Mangoes,
                  Fresh-Cut fruits, Okra, Gourds, Chilies etc. It handles more
                  than 5000 tons of produce per annum with customers in Europe,
                  North America, Middle East, South East Asia and Oceania. We,
                  Kay Bee Bio-Organics are committed for the manufacturing and
                  supply of agricultural Inputs especially for the Organic and
                  Sustainable farming. As exporters, we worked with farmers in
                  the form of contract farming from last 15 years and we realize
                  farmer’s difficulties about cost-effective feasible organic
                  and residue free farming.
                </p>
                <p>
                  Leveraging our knowledge of business, we’re able to create
                  superlative solutions that integrate more than just the
                  state-of-the-art technology. There’s tremendous value in
                  manufacturing nnovative products that match to the current
                  needs of genuine organic and residue free inputs for armers
                  meet their challenges in the field every season.
                </p>
                </div>




                <div className="col-md-7"> 
                
                <img className="img1" alt="ttttt" src={img1} />

                  </div>
            </session>
        </div>
    )
}
