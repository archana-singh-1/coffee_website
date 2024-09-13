import "./navbar.css";
function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarDetails">
            <div className="logoname">Coffee</div>
            <div className="details">
                <a href="#home" className="home">Home</a>
                <a href="#about" className="about">About</a>
                <a href="#menu" className="menu">Menu</a>
                <a href="#testimonial" className="testimonial">Testimonial</a>
                <a href="#gallery" className="gallery">Gallery</a>
                <a href="#contact" className="contact">Contact Us</a>
            </div>
            </div>
            
        </div>
    );
}
export default Navbar;
