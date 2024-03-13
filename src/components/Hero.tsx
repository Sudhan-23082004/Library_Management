
import { motion } from 'framer-motion';
import LibImg from '../assets/wallpaperflare.com_wallpaper.jpg';

export default function Hero() {
    return (
        <motion.section
            className='flex flex-col md:flex-row px-5 py-[100px] justify-center items-center'
            style={{ 
                backgroundImage: `url(${LibImg})`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <motion.div
                className='flex flex-col w-1/2 mr-32 items-center'
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ marginLeft: '4%' }}
            >
                <h1 className='text-white text-6xl font-hero-font py-5 text-center transition-transform duration-500 ease-in-out hover:scale-110'><span className='text-white'>Book Reader</span></h1>
                <p className='text-3xl text-center font-Acme text-white'>One Reader All of India</p>
            </motion.div>
            <motion.div
                className='flex flex-col w-1/2 items-center'
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ marginRight: '4%' }}
            >
                <p className='text-2xl text-white py-7 text-center font-another-font flex flex-row gap-4'>Discover your next literary adventure with our vast collection of books. Get personalized recommendations, connect with fellow readers, and stay updated on the latest literary buzz. Start your reading journey today!</p>
            </motion.div>
        </motion.section>
    );
}

