import { useState } from "react"

export default function SearchableList({items, children}) {
    const [searchTerm, setSearchTerm] = useState('');

    const searchResults = items.filter(item => JSON.stringify(item).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

    function handleChange(event){
        setSearchTerm(event.target.value)
    }

    return(
        <div className="searchable-list">
            <input onChange={handleChange} type="search" placeholder="Search" />
            <ul>
                {searchResults.map((item, index) => <li key={index}>{children(item)}</li>)}
            </ul>
        </div>
    )
}