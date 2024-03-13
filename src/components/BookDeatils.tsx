import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


type Book = {
  book_id: string; // 1
  book_name: string; // "John"
  author_name: string; // "A"
  genre: string; // false
  publication_year: string; //
  updated_ver: string; //
  img_url: string; //
  detail: string
}


export default function BookDeatils() {

  const { book_id } = useParams();
  const [book, setBook] = useState<Book>()
  console.log(book);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:51730/api/sql/get-book-id/' + book_id)
      .then((res) => res.json())
      .then((data) => {
        setBook(data.results[0]);
        setLoading(false);
      })
      .finally(()=> console.log('Book Details are fetched successfully!'))
  }, [book_id]);

  if (loading) {
    return (
      <div className="flex gap-2 items-center justify-center h-screen">
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
      </div>
    );
  }

  return (
    <section className='book-details flex justify-center items-center mt-10 font-another-font'>
      <div className='container mx-auto sm:px-6 lg:px-[230px] grid grid-cols-2 gap-1'>

        <div className='book-details-content'>
          <div className='book-details-img'>
            <img className='w-[410px] h-[540px] rounded-lg transform transition duration-500 ease-in-out hover:scale-105' src={book?.img_url} alt="" />
          </div>
        </div>

        <div className='book-details-info flex flex-col gap-3 '>
          <div className='book-details-item title'>
            <span className=' font-Acme text-3xl'>{book?.book_name}</span>
          </div>
          <div className='book-details-item description font-bold  text-[20px]'>
            <span>{book?.genre}</span>
          </div>
          <div className='book-details-item'>
            <span className='font-semibold'>Author: </span>
            <span className=''>{book?.author_name}</span>
          </div>
          <div className='book-details-item'>
            <span className='font-semibold'>Published: </span>
            <span className=''>{book?.publication_year}</span>
          </div>
          <div className='book-details-item'>
            <span className='font-semibold'>Version: </span>
            <span className=''>{book?.updated_ver}</span>
          </div>
          <div className='book-details-item'>
            <span className='font-semibold'>Details:<br/> </span>
            <span className='text-justify '>{book?.detail}</span>
          </div>
          <a href="https://drive.google.com/file/d/1IY3Rc2OGPSi3ZgGJGW-71Citoq_ySxIM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  <button type="button" className="px-7 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform  flex mr-[360px] mt-5 hover:bg-sky-400">
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    <span className="ml-2 ">Download</span>
  </button>
</a>  
          </div>
        </div>

    </section>
  )
}