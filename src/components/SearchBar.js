import { useState } from "react";

import "./SearchBar.css";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value)

    }

    return (
        <div className="search-bar-box">

            <form onSubmit={handleFormSubmit}>

                <label>
                    Enter Search Term:
                </label>
                <input type="text" value={term} onChange={handleChange} />

            </form>

        </div>
    )
}

export default SearchBar;