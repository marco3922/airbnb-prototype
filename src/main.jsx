import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from '../src/pages/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
		<BrowserRouter>
				<Routes>
						<Route path='/' element={<App/>}></Route>
						<Route path='/Search' element={<Search/>}></Route>
				</Routes>
		</BrowserRouter>
)
