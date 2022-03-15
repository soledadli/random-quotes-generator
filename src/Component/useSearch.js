import {useState} from 'react'

const useSearch = ({data}) => {
    const authorData = data.map(value => value.author)
    const authorSorted = authorData.sort((a, b) => a.localeCompare(b))
    const authorSet =  [...new Set(authorSorted)]; 

    const [filteredData, setFilteredData] = useState([])
    const [dataInput, setDataInput] = useState('')
    const [autofill, setAutofill] = useState("off")

    const handleAutofill = (e) => {
        const chosenInput = e.target.textContent
        setDataInput(chosenInput)
        setAutofill('on')
      }

     const handleFillChange = (e) => {
        const searchItem =  e.target.value 
        setDataInput(searchItem)
        if (autofill === 'on') {console.log('hi')}
       const newFilter = authorSet.filter((value,key) => value.toLowerCase().replace(/([\s\-.“”()]+)?/g,'').includes
       (searchItem.toLowerCase().replace(/([\s\-.“”()]+)?/g,'')) )
         searchItem === '' ? setFilteredData([]) : setFilteredData(newFilter)
        console.log(filteredData, 'autofillfiltered') 
     }

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
          setAutofill(false)
        }

     
          

      return [filteredData, dataInput, handleFilter, handleClear, handleAutofill, autofill, handleFillChange]
}

export default useSearch 