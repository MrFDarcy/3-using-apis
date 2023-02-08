import SearchBar from "./components/SearchBar";
import SearchImages from "./api";


function App() {

    const handleSubmit = async (term) => {
        const result = await SearchImages(term)
        console.log(result);
    }



    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
        </div>
    )
}

export default App;