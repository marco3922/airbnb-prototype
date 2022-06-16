import Search from './Search.jsx';
import React, {useState} from 'react'
import {GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid';

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import {Link, useSearchParams} from 'react-router-dom';

function Header(){


		const [searchInpunt, setSearchInput] = useState('')
		const [startDate, setStartDate] = useState(new Date())
		const [endDate, setEndData] = useState(new Date())
		const [numberGuests, setNumberGuests] = useState(1)
		
		const resetInput = () => setSearchInput('');

		const handleSelect = (ranges) => {
				setStartDate(ranges.selection.startDate);
				setEndData(ranges.selection.endDate);
		}

						

		const selectionRange = {
				startDate: startDate,
				endDate: endDate,
				key: 'selection'
		}

		return(
						<header className='
								sticky 
								top-0 z-50 
								grid grid-cols-3 
								bg-white
								shadow-md 
								py-4
								px-5
								md:px-10'
						>

								{/* Left */}
								<a href='/' className=' flex items-center cursor-pointer '>
										<img src='../../public/Airbnb_logo.png' className='h-9  object-contain'   alt=''/>
								</a>

								{/* Middle */}
								<Search searchInpunt={searchInpunt} setSearchInput={setSearchInput}/>

								{/* Right */}
								<div className='flex space-x-4 items-center justify-end text-gray-500'>
										<p className='hidden md:inline'>Become a host</p>
										<GlobeAltIcon className='h-6 cursor-pointer '/>

										<div className='flex items-center  space-x-2 border-2 p-2 rounded-full'>
												<MenuIcon className='h-6 cursor-pointer'/>
												<UserCircleIcon className='h-6 cursor-pointer'/>
										</div>
								</div>
								
								{searchInpunt && 
										(
										<div className='flex flex-col col-span-3 mx-auto'>
												<DateRangePicker 
														ranges={[selectionRange]}
														minDate={new Date()}
														rangeColors={['#fd5b61']}
														onChange={handleSelect}
												/>
												<div className='flex items-center border-b mb-4'>
														<h2 className='text-2xl pl-2 flex-grow font-semibold'>
																Number of Guests
														</h2>
														<UsersIcon className='h-5'/>
														<input
																value={numberGuests}
																onChange={e => setNumberGuests(e.target.value)}
																min={1}
																type='number' 
																className='w-12 pl-2 text-lg outline-none text-red-400'/>
												</div>
												<div className='flex'>
														<button onClick={ resetInput} className='flex-grow text-gray-500'>Cancel</button>
														<Link to='/Search' className='flex-grow text-red-400'>Search</Link>
												</div>	
										</div>
										)
								}
						</header>				
				)
};

export default Header;
