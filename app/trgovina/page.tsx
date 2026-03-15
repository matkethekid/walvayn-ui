import Navbar from '@/components/Navbar';

const page = () => {
  return (
    <section className='min-h-screen w-full'>
      <Navbar/>
      <div className='w-full min-h-screen flex-1 bg-yellow-500 flex flex-row'>
        <div className='w-[20%] h-screen bg-white flex flex-col p-5'>
          <h1 className='text-3xl font-bold text-black'>Proizvodi (1570)</h1>
        </div>
        <div className='w-[80%] h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-red-500'>aa</div>
      </div>
    </section>
  )
}

export default page;