import'./Styles/Utenti.css'

function Utente() {
    const lista = [
        {
            nome: "Marco",
            cognome: "Salvi",
            Anno: 2010, 
            },

        {
            nome: "Franceso",
            cognome: "Costanzo",
            Anno: 2007
        }

    ]
    return(
    <div>
        <p>Sezione Utenti</p>
        <div>
            {lista.map(Utente=>(
                <div className="lista">
                    <h2 className="nome">{Utente.nome}</h2>
                    <h2 className="cognome">{Utente.cognome}</h2>                
                    <h2 className="anno">{Utente.Anno}</h2>
                </div>
            ))}
        </div>
    </div>
    )
}
export default Utente;