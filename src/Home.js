import "./home.css"
function Home(){
    return(
        <div className="homeContain">
            <div className="textDiv ">
                <div className="homedetails">
                    <p className="besttext">Best Coffee</p>
                    <p className="special">Make your day great with our special coffee!</p>
                    <p className="welcome">Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
                    <div className="buttons">
                        <button className="orderNow">Order Now</button>
                        <button className="contactUs">Contact Us</button>
                    </div>
                </div>
                
            </div>
            <div className="imageDiv">
                <img src="coffee-hero-section.png" alt="" className="coffeeImg"/>
            </div>

        </div>
    )
}
export default Home;