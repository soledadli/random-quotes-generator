import {useState} from 'react'

const useSearch = ({data}) => {
    const authorData = data.map(value => value.author)
    const authorSorted = authorData.sort((a, b) => a.localeCompare(b))
    const authorSet =  [...new Set(authorSorted)]; 

    const [filteredData, setFilteredData] = useState([])
    const [dataInput, setDataInput] = useState('')
     const handleFilter = (e) => {
         const searchItem =  e.target.value
         setDataInput(searchItem)
         const newFilter = authorSet.filter((value,key) => value.toLowerCase().replace(/([\s\-.“”()]+)?/g,'').includes
         (searchItem.toLowerCase().replace(/([\s\-.“”()]+)?/g,'')) )
           searchItem === '' ? setFilteredData([]) : setFilteredData(newFilter)
       }  
      
      const handleClear = () => {
          setFilteredData([])
          setDataInput('') 
      }
      return [filteredData, dataInput, handleFilter, handleClear]
}

export default useSearch 