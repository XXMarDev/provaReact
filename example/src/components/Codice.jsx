import { useParams } from "react-router-dom";

function Codice() {
    const ilMioCodice = useParams().ilMioCodice;
    const stringa = "ciao";
    return (
        <div>
            <p>Buona sera: {stringa}</p>
            <p>Sei alla pagina dei codici</p>
            <p>Il tuo codice è: {ilMioCodice}</p>
        </div>


    )

}
export default Codice;
