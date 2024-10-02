import logo from './logo.svg';
import './App.css';
import { Card, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import FormComponent from './components/Forms';



function App() {
  const[data, setData] = useState({})

  const onChange = (e) => {
    e.preventDefault();
    const obj = data;
    obj[e.target.name] = e.target.value;
    setData(obj)
    console.log(obj)
  }

  const onClick = ()=> {
    console.log(data)
  }

  return (
    <Container>

      <Card className="mt-3">

        <Card.Body>

          <Card.Title>

            Formulario para dar de alta un usuario

          </Card.Title>

          <p>{data.name}</p>
          <p>{data.last_name}</p>
<FormComponent onChange={onChange}> </FormComponent>
       

        </Card.Body>
      </Card>
    </Container>
  );
}
 




export default App;
