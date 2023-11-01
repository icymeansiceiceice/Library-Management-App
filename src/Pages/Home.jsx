import HeroSection from "../Component/HeroSection"
import book from '../assets/the-rest-is-history-hardback-book-jacket.jpg'


function Home() {

  return (
    <>
      <HeroSection/>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
          {
            [1,2,3,4,5].map(()=> (
              <div className="p-4 border border-1">
                <img src={book} alt=""/>
                <div className="text-center space-y-2 mt-3">
                  <h1>Book title</h1>
                  <p>description</p>
                  <div className="flex flex-wrap">
                     {['travel','knowledge','triller,super'].map((g)=>(
                        <span className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500">{g}</span>
                     ))
                     }
                  </div>
                </div>
              </div>
            ))
          }
      </div>  
    </>
  )
}

export default Home
