function FilterDropdown() {
    return (
        <div>
            <select style={{ width: '100%', padding: '10px', fontSize: '16px' }}> 
                <option value="none">None</option>
                <option value="gray">Gray</option>
                <option value="sepia">Sepia</option>
                <option value="poster">Poster</option>
                <option value="blur">Blur</option>
                <option value="edge">Edge</option>
                <option value="solar">Solar</option>
            </select>
        </div>
    )
}

export default FilterDropdown