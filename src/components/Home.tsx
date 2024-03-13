
import Hero from './Hero'
import BookShow from './BookShow'
import OtherLibraries from './OtherLibraries'
import { ContactUs } from './ContactUs'
import SocialProfile from './SocialProfile'
export default function Home() {
  return (
    <div>
       <Hero/>
            <BookShow />
            <OtherLibraries/>
            <ContactUs/>
            <SocialProfile />
    </div>
  )
}
