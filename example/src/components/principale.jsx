function Principale() {
    function stampaQualcosa() {
        console.log("CIAO");
    }
    return (
        <div>
            <p>Buona sera</p>
            <p>Sei alla pagina Principale</p>
            <button onClick={()=>stampaQualcosa()}>Pagina principale</button>
        </div>


    )

}
export default Principale;