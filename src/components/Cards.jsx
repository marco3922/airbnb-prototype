function Cards({img, location, distance}){

		return(
				<div className='flex items-center m-2 mt-5 space-x-4 rounded-xl 
								cursor-pointer  hover:gray-300 hover:scale-105 transition
								transform duration-200 ease-out'>
						<div className='relative h-16 w-16'>
								<img src={img} className='rounded-lg object-cover' alt=''/>
						</div>

						<div className=''>
								<h2>{location}</h2>
								<h3>{distance}</h3>
						</div>
				</div>
		)
}

export default Cards;
