

const SearchFilter = ({ value, onChange }) => {
    return (
        <>
            <span>Filter shown with:</span>
            <input type='text' value={value} onChange={onChange} />
        </>
    )
}

export default SearchFilter