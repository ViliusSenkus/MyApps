import Subheader from './subheader';

function Header (props) {  
    //kitas variantas iš karto sudėti kintamuosius į funkcijos parametrus:
    // Header (name, picture, background)
    // { tada funkcijoje nereikia rašyti props.name ...}

    return (
        <div>
            <div>
             <img src={props.picture} alt="logo" />
            </div>
            <h1>{props.name}</h1>
        {/* dar kažkaip reikia įdėti backgroundą, gal per stilius */}
        <Subheader name={props.name} />
        {/*duomenų perdavimas iš aukščiau žemyn*/}
        </div>
    )
}

export default Header;