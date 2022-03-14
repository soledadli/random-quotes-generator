import React, { useState } from 'react'
import Social from './Social'
import { FaQuoteLeft } from "react-icons/fa"
import useConfig from '../useConfig'
import { getValue } from '@testing-library/user-event/dist/utils'
import useSearch from './useSearch'
import { BsSearch, BsX, BsCheck } from 'react-icons/bs'

const Quote = ({ data }) => {
  // npm i randomquote package
  const Quotes = require("randomquote-api");
  const [quote, setQuote] = useState('Do something worth remembering.')
  const [author, setAuthor] = useState('Benjamin Franklin')
  const [bgImage, setBgImage] = useState('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw1MzE3MnwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjQ5OTM1OA&ixlib=rb-1.2.1&q=85')
  const { clientID } = useConfig()

  function unsplashGetPhotos() {
    fetch(
      `https://api.unsplash.com/photos/random?query=Nature&orientation=landscape&content_filter=high${clientID}`
    )
      .then((res) => res.json())
      .then((data) => setBgImage(data.urls.full), console.log(bgImage))
      .catch((err) => {
        console.error(err);
      });
  }

  function handleNext() {
    unsplashGetPhotos()
    setQuote(Quotes.randomQuote()['quote'])
    setAuthor(Quotes.randomQuote()['author'])
  }
  const [filteredData, dataInput, handleFilter, handleClear] = useSearch({ data });

  return (
    <div>
      <div className='search-container'>
        <div className='search'>
          <div className='searchInput' >
            <div className='searchIcon'><BsSearch style={{ color: 'black' }} /></div>
            <input type='text' placeholder='Write down the names' value={dataInput} onChange={handleFilter}></input>
            <div className='crossIcon'>{dataInput.length == 0 ? <BsCheck style={{ color: 'black' }} />
              : <BsX id='clearBtn' style={{ color: 'black' }} onClick={handleClear} />}
            </div>
          </div>
          {filteredData.length != 0 && (
            <div className='dataResult'>
              {filteredData.slice(0, 10).map((value, key) => {
                return (<a className='dataItem' href='#'>
                  <p>{value}</p>
                </a>)
              })}
            </div>
          )
          }
        </div>
      </div>
      {/* <ChangeColor tgChange = {handleChange}/> */}
      <div className='quote-bg-container' style={{ backgroundImage: `url(${bgImage})` }}>
        <h1 className='quote'><FaQuoteLeft className='quote-icon' />
          {filteredData[0] ? Quotes.getbyauthor(filteredData[0], 1)[0].quote : quote}
        </h1>
        <h3 className='author-name'>
          {filteredData[0] ? Quotes.getbyauthor(filteredData[0], 1)[0].author : author}
        </h3>
        <div className='social-container'>
          <button className='quote-button' onClick={handleNext}>New Quote</button>
          <Social quote={quote} author={author} />
        </div>
      </div>
    </div>
  );
}

export default Quote