import about from '../assets/About.jpg';
import WhatSetsUsApart from './WhatSetsUsApart';

const About = () => {
    return (
        <div className="mt-16 px-4 lg:px-24">
            <div className="h-96 flex items-center justify-center bg-cover" style={{ backgroundImage: `url(${about})` }}>
                <h2 className="text-5xl font-bold text-white">
                    About Us
                </h2>
            </div>
            <div className="bg-white p-8 rounded shadow mt-8">
                <h2 className="text-2xl text-center font-bold mb-4">Our Story</h2>
                <p className="text-gray-700">
                    Book Store was born out of a shared love for books and the desire to create a space that celebrates the magic of storytelling. What started as a small independent bookstore has blossomed into a literary haven that caters to the diverse tastes and interests of our ever-growing community.
                </p>
            </div>

            <div className="bg-white p-8 rounded shadow mt-8">
                <h2 className="text-2xl text-center font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700">
                    At Book Store, our mission is simple: to inspire a love for reading and foster a sense of community around books. We believe in the power of stories to transport, transform, and unite people. Our carefully curated collection reflects this belief, offering a wide range of genres, from timeless classics to contemporary bestsellers.
                </p>
            </div>

            <div>
                <WhatSetsUsApart />
            </div>
        </div>
    );
};

export default About;