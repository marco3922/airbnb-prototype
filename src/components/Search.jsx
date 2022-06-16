import {SearchIcon} from '@heroicons/react/solid'

function Search({searchInpunt, setSearchInput}) {
		
		return(
				<div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
						<input 
								type='text'
								className=' flex-grow pl-5 text-sm text-gray placeholder-gray-400 bg-transparent outline-none' placeholder='Start your search'
								value={searchInpunt}
								onChange={(e) => setSearchInput(e.target.value)}
						/>
						<SearchIcon className= '
								hidden
								md:inline-flex
								h-8 
								bg-red-400 
								text-white 
								rounded-full 
								p-2 
								cursor-pointer md:ms-2'/> 	
				</div>
		)
}

export default Search;
