// Footer.js
import React from "react";
import "../Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <footer className="footer-content text-white">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12 left-content text-lg-left text-center mb-3 mb-lg-0">
                                <div className="footer-left">
                                    <p>&copy; {new Date().getFullYear()} GEOPHYSICO. All Rights Reserved.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 right-content text-lg-right text-center">
                                <div className="footer-right">
                                    <a href="#" className="social-link text-white"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social-link text-white"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="social-link text-white"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
