import Footer from '@/components/Footer';
import IndividualItem from '@/components/IndividualItem';
import Navbar from '@/components/Navbar';

const page = () => {
  return (
    <div className='w-full min-h-screen bg-gray-50/50'>
      <Navbar/>
      <IndividualItem/>
      <Footer/>
    </div>
  )
}

export default page;