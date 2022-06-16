import {useFetch} from "../hooks/useFetch";

function MediumCard(){

		const urlMC = '../../urlMedium.js'
		const {data, loading} = useFetch(urlMC)


		return(
				<div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
						{
								data.map(({img, title}) => 
										<div key={img} className='cursor-pointer hover:scale-105 transform
												trasition duration-300 ease-out'>
												<div className='relative h-80 w-80'>
														<img src={img} className='rounded-xl' alt={title}/>
												</div>

												<h3 className='text-2xl mt-3'>{title}</h3>
										</div>
								)

						}
				</div>
		)

}

export default MediumCard;
