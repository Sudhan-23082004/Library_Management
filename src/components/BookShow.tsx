import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface bookdb {
  book_id: string; // 1
  book_name: string; // "John"
  author_name: string; // "A"
  genre: string; // false
  publication_year: string; //
  updated_ver: string; //
  img_url: string; //
  detail: string
}

export default function BookShow() {
  const auth_token = "6853167hgfdvhbsavcajfhioqwergfvqwhkkcadsba_c";
  const navigate = useNavigate();

  const [books, setBook] = useState<bookdb[]>([]);

  const [search, setSearch] = useState<string>('')
  const [filteredBooks, setFilteredBooks] = useState<bookdb[]>([])

    

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      try {
        fetch("/api/sql/get-all-books", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth_token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setBook(data.results);
            setLoading(false);
          })
          .finally(() => console.log("Books are fetched successfully!"));
      } catch (error: any) {
        console.log(error);
        setLoading(false);
      }
    }, []);


    useEffect(() => {
      const filteredBooks = books.filter((book) => {
          return book.book_name.toLowerCase().includes(search.toLowerCase())
      })        
      setFilteredBooks(filteredBooks)
    }, [search, books])

    

    if (loading) {
      return <div className="flex gap-2 items-center justify-center mt-14">
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
  </div> // Replace this with your loading animation
    }

    

  const handleRead = (bookId: string) => {
  navigate(`/details/${bookId}`);
  };

  return (
    <div className="w-full bg-[#ded2a8]   flex flex-col ">
      <div className="w-full bg-gradient-to-tr flex  items-center justify-between">
        <div className="w-max flex flex-col  gap-3 px-9">
          <h1 id="#books"
            className="animate-typing overflow-hidden whitespace-nowrap max-w-96 border-r-4 border-r-black pr-5 text-3xl text-black font-another-font font-bold mt-6">
            Start Reading....
          </h1>

        </div>
        <input className="py-2.5 mt-5 mr-10 w-full rounded-full px-4 font-another-font font-semibold text-sm max-w-[500px]"type="text" value={search} placeholder='Search books here . . . .' onChange={(e) => setSearch(e.target.value)} />
        
      </div>

      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 gap-14 ml-5 mr-5 mt-5 mb-5">



        {

          search.length > 0 ?(
            filteredBooks.map((book) =>(
              <div key={book.book_id}>
              <div className="bg-[#f9fafa] p-4 w-60 h-[390px] rounded-lg book-container transform transition duration-500 hover:scale-105 hover:bg-[#b4dfe5]">
                <div className=" flex flex-col gap-2 "> 
                  <img className=" size-56  h-[260px] rounded-lg object-" src={book.img_url} alt="" />
                  <div className="flex flex-col "></div>
                  <p className="text-gray-700 text-[15px] font-semibold font-another-font text-center overflow-hidden text-overflow-ellipsis whitespace-nowrap" style={{height: '30px', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{book.book_name}</p>
                  <button onClick={() => handleRead(book.book_id)} className="rounded mr-9 ml-9 px-4 py-2 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Read More</span>
                </button>
                </div>
              </div>
            </div>
            ))
          ) : (
        books.map((book)=> (
          <div key={book.book_id}>
            <div className="bg-[#f9fafa] p-4 w-60 h-[390px] rounded-lg book-container transform transition duration-500 hover:scale-105 hover:bg-[#b4dfe5]">
              <div className=" flex flex-col gap-2 "> 
                <img className=" size-56  h-[260px] rounded-lg object-" src={book.img_url} alt="" />
                <div className="flex flex-col "></div>
                <p className="text-gray-700 text-[15px] font-semibold font-another-font text-center overflow-hidden text-overflow-ellipsis whitespace-nowrap" style={{height: '30px', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{book.book_name}</p>
                <button onClick={() => handleRead(book.book_id)} className="rounded mr-9 ml-9 px-4 py-2 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Read More</span>
              </button>
              </div>
            </div>
          </div>
        ))
          )

      }




      </div>
    </div>
  );
}


