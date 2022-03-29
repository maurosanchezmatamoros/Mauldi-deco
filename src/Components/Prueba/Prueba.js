import { useState } from 'react';

function Prueba() {
    const [pulgar, moverPulgar] = useState("");

    return (
        <div>
            <button onClick={() => moverPulgar(pulgar + "👍")}>Me gusta</button>
            <p>{pulgar}</p>
            <button onClick={() => moverPulgar(pulgar + "👎")}>No me gusta</button>
        </div>
    )
}

export default Prueba
