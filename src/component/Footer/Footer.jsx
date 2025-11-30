import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-14 px-6 md:px-20">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                <div>
                    <h3 className="text-white font-semibold mb-4">Clients</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Templates</li>
                        <li>Enterprise</li>
                        <li>Extensions</li>
                        <li>Managers</li>
                        <li>How to Hire</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Talent</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Operations</li>
                        <li>Marketing</li>
                        <li>Finance</li>
                        <li>Product</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Community</li>
                        <li>Resources</li>
                        <li>Learning</li>
                        <li>Webinars</li>
                        <li>Customers</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About us</li>
                        <li>Leadership</li>
                        <li>Careers</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            
            <hr className="border-gray-700 mb-6" />

            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm mb-4">
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Advertise</a>
                    <a href="#">Media</a>
                </div>

                
                <div></div>
            </div>

            
            <div className="text-sm text-gray-400">
                © 2024. All Rights Reserved. <br />
                Built by BootstrapBrain with 💙
            </div>
        </footer>
    );
};

export default Footer;
