import "./about.css"
function About(){
    return(
        <div className="aboutConatin">
            <div className="mainContain">
                <div className="imageContain">
                    <img src="about-image.png" alt="" className="imgContain"/>
                </div>
                <div className="textContain">
                    <h2 className="aboutUstext">About Us</h2>
                    <p className="pTag">We at Coffee House, located in Berndorf, Germany, are one of the favorite hangouts for coffee and conversations. Our goal is to offer the best experience to our guests, ensuring an authentic coffee drinking experience in a warm, friendly, and relaxed environment. We aim to bring a sense of relaxation to the city with our cozy space, complete with comfortable couches to lounge in while you enjoy your coffee.</p>
                </div>
            </div>
        </div>
    )

}
export default About;