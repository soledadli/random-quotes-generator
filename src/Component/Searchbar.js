import { useState } from 'react'
import { BsSearch, BsX, BsCheck } from 'react-icons/bs'
import useSearch from './useSearch'

const Searchbar = ({ placeholder, data }) => {
    const [filteredData, dataInput, handleFilter, handleClear] = useSearch({data});

    return (
        <div className='search-container'>
            <div className='search'>
                <div className='searchInput' >
                    <div className='searchIcon'><BsSearch style={{ color: 'black' }} /></div>
                    <input type='text' placeholder={placeholder} value={dataInput} onChange={handleFilter}></input>
                    <div className='crossIcon'>{filteredData.length === 0 ? <BsCheck style={{ color: 'black' }} />
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
    )
}

export default Searchbar