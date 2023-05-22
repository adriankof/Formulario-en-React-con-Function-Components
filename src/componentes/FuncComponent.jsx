import { useState } from "react"

//Creado para ver la diferencia Components y Function Components

function FuncComponent() {
    const [value, setValue] = useState(0)

    return <div>
        Componente funcional
        <p>
            <button onClick={() => setValue(value - 1)}>-</button>
            {value}
            <button onClick={() => setValue(value + 1)}>+</button>
        </p>
    </div>
}

export default FuncComponent