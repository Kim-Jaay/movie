import React, { useState } from 'react'
import List from './List'
import './common.scss'
import { Route, Routes, Link } from 'react-router-dom'
import Main from './Main'
import Header from './Header'

const App = () => {


  const genreList = [
    'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Drama', 'Fantasy', 'Romance', 'Thriller', 'Western'
  ]
  return (
    <div>
      <Header>
        <ul className='flex'>
          {
            genreList.map((it) => {
              return (
                <li>
                  <Link to={it}>{it}</Link>
                </li>

              )
            })
          }
        </ul>
      </Header>



      <Routes>
        <Route path='/' element={<Main genre='Action' limit={50} />}></Route>
        {

          genreList.map((it) => {
            return (
              <Route path={it} element={<List genre={it} limit={5} />}></Route>
            )
          })
        }
      </Routes>


      <List genre='Drama' limit={20} />
      <List genre='Action' limit={20} />
      <List genre='Horror' limit={20} />
    </div >
  )
}

export default App