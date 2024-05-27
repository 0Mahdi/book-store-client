import { Link } from 'react-router-dom';
import footer from '../assets/footer.png';

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                textAlign: 'center', // Center the text in the footer
            }}
            className="p-10"
        >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-black'> {/* Set text color to black */}
                <div>
                    <span className="font-bold text-xl">Services</span>
                    <Link to="/" className="block my-2 hover:underline">Emergency Contact</Link>
                    <Link to="/" className="block my-2 hover:underline">Email Contact</Link>
                    <Link to="/" className="block my-2 hover:underline">24 Hours Services</Link>
                </div>
                <div>
                    <p className="text-gray-300">Copyright © 2023 - All Rights Reserved</p>
                </div>
                <div>
                    <span className="font-bold text-xl">Our Address</span>
                    <Link to="/" className="block my-2 hover:underline">New York - 101010 Hudson</Link>
                </div>
            </div>
            {/* <div className='text-center mt-16'>
                <p className="text-gray-300">Copyright © 2023 - All Rights Reserved</p>
            </div> */}
        </footer>
    );
};

export default Footer;

// import { Footer } from 'flowbite-react';
// import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

// const MyFooter = () => {
//     return (
//         <Footer bgDark>
//             <div className="w-full px-4 lg:px-24">
//                 <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
//                 <div>
//                     <Footer.Title title="Company" />
//                     <Footer.LinkGroup col>
//                     <Footer.Link href="#">About</Footer.Link>
//                     <Footer.Link href="#">Careers</Footer.Link>
//                     <Footer.Link href="#">Brand Center</Footer.Link>
//                     <Footer.Link href="#">Blog</Footer.Link>
//                     </Footer.LinkGroup>
//                 </div>
//                 <div>
//                     <Footer.Title title="help center" />
//                     <Footer.LinkGroup col>
//                     <Footer.Link href="#">Discord Server</Footer.Link>
//                     <Footer.Link href="#">Twitter</Footer.Link>
//                     <Footer.Link href="#">Facebook</Footer.Link>
//                     <Footer.Link href="#">Contact Us</Footer.Link>
//                     </Footer.LinkGroup>
//                 </div>
//                 <div>
//                     <Footer.Title title="legal" />
//                     <Footer.LinkGroup col>
//                     <Footer.Link href="#">Privacy Policy</Footer.Link>
//                     <Footer.Link href="#">Licensing</Footer.Link>
//                     <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
//                     </Footer.LinkGroup>
//                 </div>
//                 <div>
//                     <Footer.Title title="download" />
//                     <Footer.LinkGroup col>
//                     <Footer.Link href="#">iOS</Footer.Link>
//                     <Footer.Link href="#">Android</Footer.Link>
//                     <Footer.Link href="#">Windows</Footer.Link>
//                     <Footer.Link href="#">MacOS</Footer.Link>
//                     </Footer.LinkGroup>
//                 </div>
//                 </div>
//                 <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
//                 <Footer.Copyright href="#" by="Flowbite™" year={2022} />
//                 <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
//                     <Footer.Icon href="#" icon={BsFacebook} />
//                     <Footer.Icon href="#" icon={BsInstagram} />
//                     <Footer.Icon href="#" icon={BsTwitter} />
//                     <Footer.Icon href="#" icon={BsGithub} />
//                 </div>
//                 </div>
//             </div>
//         </Footer>
//     );
// };

// export default MyFooter;