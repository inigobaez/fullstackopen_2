
const Search = ({ search, handleSearchChange }) => {
    return (
        <>
            <span>Find countries</span>
            <input type='text' placeholder='Ex: Argentina' value={search} onChange={handleSearchChange} />

        </>

    )
}

export default Search