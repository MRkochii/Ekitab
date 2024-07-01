import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Course = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5300/book");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <div className='max-w-screen-2xl container md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <div className='mt-20 justify-center items-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            To learn to read is to light a <span className='text-pink-500'>fire!!</span>
          </h1>
          <p className='mt-6'>
            “To learn to read is to light a fire; every syllable that is spelled out is a spark.” “I declare after all there is no enjoyment like reading! ...
            “Books are the mirrors of the soul. I love that I could see into her mindset and read exactly what she was feeling when she thought out situations. Her thoughts flowed well and moved the book along very quickly. Cassandra's narrative voice is wonderful. She is serious at times, but also very witty, which makes for an engaging read.”
          </p>
          <Link to='/'>
            <button className='border rounded-lg bg-pink-500 px-6 py-2 mt-6 hover:bg-pink-600 text-fuchsia-100'>Back</button>
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4'>
          {books.map((item) => (
            <Cards item={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
