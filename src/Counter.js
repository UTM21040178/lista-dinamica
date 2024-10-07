import React, { useState } from "react";
import { Button, Container, FormControl } from "react-bootstrap";

export const Counter = () => {
   
    const [count, setCount] = useState(0);
    

    const [inputs, setInputs] = useState([0]); 

    // Función para agregar un nuevo input
    const addInput = () => {
        // se crea un nuevo arreglo y agregamos un nuevo input de valor 0
        const newInputs = [...inputs, 0]; 
        setInputs(newInputs);
    };

    // Función para eliminar el último input
    const removeInput = () => {
        if (inputs.length > 1) { 
            
            const newInputs = []; 
            for (let i = 0; i < inputs.length - 1; i++) {
                newInputs.push(inputs[i]); 
            }
            setInputs(newInputs); 
        }
    };

    // Función para manejar el cambio de valor en un input específico
    const handleInputChange = (index, value) => {
        // nuevo arreglo 
        const newInputs = [...inputs];
        // convierte el valor a número o a 0 si está vacío
        newInputs[index] = value === "" ? 0 : Number(value); 
        setInputs(newInputs); 
    };

    // Cálculo del total sumando todos los valores en inputs
    let total = 0; 
    for (let i = 0; i < inputs.length; i++) {
        total += inputs[i]; 
    }

    return (
        <Container>
            <h3>{count}</h3>
            <Button onClick={() => setCount(count + 1)}>Add</Button>
            <Button onClick={() => setCount(count - 1)}>Decrease</Button>
            <hr />
            <h3>Lista dinámica</h3>
            <h4>Total: {total}</h4> 
            {inputs.map((value, i) => (
                <div key={i}> 
                    <p>Cifra: {i + 1}</p>
                    <FormControl
                        type="number"
                        value={value} 
                        onChange={(e) => handleInputChange(i, e.target.value)} // Manejar el cambio
                    />
                </div>
            ))}
            <Button onClick={addInput}>Add Input</Button>
            <Button onClick={removeInput}>Remove Input</Button>
        </Container>
    );
};
export default Counter