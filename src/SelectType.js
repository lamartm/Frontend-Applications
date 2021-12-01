const SelectType = () => {
    return(
    <form>
        Kies een variabel
        <select id="select">
        <option value="parkeer" selected>Aantal parkeerplaatsen</option>
        <option value="laad">Aantal laadpunten</option>
        <option value="handicap">Toegankelijkheid voor gehandicapten</option>
        </select>
    </form>
    )
}

export default SelectType