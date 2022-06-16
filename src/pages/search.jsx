import Footer from '../components/Footer';
import Header from '../components/Header'
import InfoCard from '../components/InfoCard';
import {useFetch} from '../hooks/useFetch';

const Search = () => {

		const url ='../../urlInfoCard.js'
		const {data} = useFetch(url);

		console.log(data)
		return(
				<div>
						<Header/>

						<main className='flex'>
								<section className='flex-grow pt-14 px-6'>
										<p className='text-xs'>300+ Stays for 5 number of guests</p>

										<h1 className='text-2xl font-semibold mt-2 mb-6'>Stays in Mars</h1>

										<div>
												<p className='px-4 border rounded-full cursor-pointer hover:shadow-lg active:scale-95
														active:bg-gray-100 transition transform duration-100 ease-out;
												'>
														Cancellation flexibility
												</p>
													<p className='px-4 border rounded-full cursor-pointer hover:shadow-lg active:scale-95
														active:bg-gray-100 transition transform duration-100 ease-out;
												'>
														Type of Place	
												</p>
												<p className='px-4 border rounded-full cursor-pointer hover:shadow-lg active:scale-95
														active:bg-gray-100 transition transform duration-100 ease-out;
												'>
														Price
												</p>
												<p className='px-4 border rounded-full cursor-pointer hover:shadow-lg active:scale-95
														active:bg-gray-100 transition transform duration-100 ease-out;
												'>
														Rooms and Beds 
												</p>
												<p className='px-4 border rounded-full cursor-pointer hover:shadow-lg active:scale-95
														active:bg-gray-100 transition transform duration-100 ease-out;
												'>
														More filters
												</p>
										</div>

										{data.map(({img, title, description, star, price, total}) => (
												<InfoCard
														key={img}
														img={img}
														title={title}
														description={description}
														star={star}
														price={price}
														total={total}
												/>
										))}
								</section>
						</main>
						<Footer/>
				</div>
		)
}

export default Search;
