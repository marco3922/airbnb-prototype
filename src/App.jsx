import Banner from './components/Banner.jsx'
import Cards from './components/Cards.jsx'
import Header from './components/Header.jsx'
import LargeCard from './components/LargeCard.jsx'
import MediumCard from './components/MediumCard.jsx'
import {useFetch} from './hooks/useFetch.js'
import Footer from './components/Footer.jsx'

function App() {

		const urlCards = '../url.js'
		const {data, loading} = useFetch(urlCards)

		return (
						<div className=''>
								<Header/>
								<Banner/>
								<main className='max-w-7xl mx-auto px-8 sm:px-16 '>
										<section className='pt-6'>
												<h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>	
												
												<div className='grid grid-clos-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
														{data.map(({img, location, distance}) => (
																<Cards
																		key={img}
																		img={img}
																		location={location}
																		distance={distance}
																/>
														))}
												</div>
										</section>

										<section>
												<h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
												<MediumCard/>
										</section>

										<LargeCard 
												img='https://links.papareact.com/4cj'
												title='The Greatest Outdoors'
												description='Wishlist curated by Airbnb'
												buttonText='Get Inspired'
										/>
								</main>

								<Footer/>	
						</div>
  )
}

export default App
