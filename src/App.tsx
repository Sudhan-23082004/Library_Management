import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BookDeatils from "./components/BookDeatils";
import Back from './components/Back.tsx'
import './index.css';
import { useAuth0 } from "@auth0/auth0-react";
import About from "./components/About";
import Comments from "./components/Comments";
import icon from "./assets/icon.png";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Home from "./components/Home.tsx";

const ProtectedRoute = ({ component, ...args } : any) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

function App() {
  const { logout } = useAuth0();
  return (
    <BrowserRouter>
      <div className="sticky top-0 z-50 bg-[#302718] py-4 items-center">
        <nav className="flex items-center justify-between pl-10 pr-20">
          <div className=" flex flex-row font-another-font items-center">
            <ul>
              <Link to="/">
                <img src={icon} alt="Icon" className="h-7 w-7 " />
              </Link>
            </ul>

            <ul>
              <Link className="text-white font-semibold hover:text-yellow-500 pl-7 px-4" to='/'>Home</Link>
            </ul>
            <ul>
              <Link className="text-white font-semibold hover:text-yellow-500 px-4" to='/#books'>Books</Link>
            </ul>
            <ul>
              <Link className="text-white font-semibold hover:text-yellow-500 px-4" to='/about'>About</Link>
            </ul>
            <ul>
              <Link className="text-white font-semibold hover:text-yellow-500 px-4" to='/comments'>Comments</Link>
            </ul>
            <ul>
            <button className="text-white font-semibold hover:text-yellow-500 px-4" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Logout
    </button>
              </ul>



          </div>
          <div>
            <Back/>
          </div>
        </nav>
      </div>
      <Routes>


        <Route path='/' element={<ProtectedRoute component={Home} />} />
        <Route path='/details/:book_id' element={<BookDeatils />} />
        <Route path='/about' element={<About />} />
        <Route path='/comments' element={<Comments />} />
        
      
      
      </Routes>
    </BrowserRouter>
  )
}

export default App