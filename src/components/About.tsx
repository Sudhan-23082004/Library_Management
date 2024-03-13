
import about from '../assets/about.jpg';

export default function About() {

  return (
    
    <div>
 
      <section className='book-details flex justify-center items-center py-9 font-another-font'>

<div className='container  mt-5 sm:px-6 lg:px-[230px] grid grid-cols-2 gap-1'>

  <div className='book-details-content'>
    <div className='book-details-img'>
      <img className='w-[410px] h-[540px] rounded-lg' src={about} alt="" />
    </div>
  </div>

  <div className='book-details-info flex flex-col gap-3 '>
    <div className='book-details-item title text-center'>
      <span className=' font-Acme text-3xl'>About</span>
    </div>
    
    <div className='book-details-item'>
      
      <span className='text-justify text-[18px] '>
      Welcome to <b>Book Reader</b>, your ultimate destination for digital reading! Explore our 
      extensive collection of e-books spanning various genres, from classic literature to contemporary 
      bestsellers. Our user-friendly platform allows you to seamlessly browse, purchase, and read e-books 
      on any device, ensuring a comfortable reading experience tailored to your preferences.<br/><br/>
      
      Join our vibrant community of book lovers to connect, share recommendations, and engage in lively 
      discussions. We're dedicated to supporting authors by providing a platform for their work to reach a 
      global audience. At <b>Book Reader</b>, we believe in the power of storytelling to inspire, educate, 
      and entertain, and we're committed to making reading accessible and enjoyable for all.<br/><br/>
      
      Thank you for choosing <b>Book Reader</b> as your trusted source for digital reading. Whether 
      you're at home, on the go, or traveling, let us accompany you on your literary journey. Happy reading!
      </span>
    </div>
    
    </div>
  </div>

</section>
    </div>
    
  )
}