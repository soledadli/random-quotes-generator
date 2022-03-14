import {useState} from 'react'

const useSearch = ({data}) => {
    const [filteredData, setFilteredData] = useState([])
    const [dataInput, setDataInput] = useState('')
     const handleFilter = (e) => {
         const searchItem =  e.target.value
         setDataInput(searchItem)
         console.log(dataInput, 'data')
         const newFilter = data.filter((value) => value.toLowerCase().replace(/([\s\-.“”()]+)?/g,'').includes
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