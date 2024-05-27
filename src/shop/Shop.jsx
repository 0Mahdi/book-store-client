import { useEffect, useState } from "react";
import { Card } from 'flowbite-react';
import All from '../assets/All.jpg';

const Shop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div className="mt-28 px-4 lg:px-24">

            <div className="h-96 flex items-center justify-center" style={{ backgroundImage: `url(${All})` }}>
                <h2 className="text-5xl font-bold text-white">
                All Books are Here
                </h2>
            </div>

            <div className="grid gap-8 my-12 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
                {
                    books.map(book =><Card href="#" className="max-w-sm" key={book}>
                            <img src={book.imageUrl} alt="" className="h-96" />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {book.bookTitle}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {book.bookDescription}
                            </p>
                            <button className="bg-teal-800 font-semibold text-white py-2 rounded">Buy Now</button>  
                        </Card>
                    
                    )
                }
            </div>
        </div>
    );
};

export default Shop;
