import Header from "components/Header";
import { useEffect } from "react";
import { getFutInfo } from "FutService";

function Elenco () {

    useEffect(() => {
        getFutInfo()
            .then(data => console.log(data));
    }
)

    return (
        <Header/>
    )
}

export default Elenco;