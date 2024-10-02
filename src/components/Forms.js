import { Button, Form,FormGroup } from "react-bootstrap";

const FormComponent = ({onChange, onClick}) =>{

return(

    <Form>

    <FormGroup>

      <Form.Label>Nombre:</Form.Label>

      <Form.Control onChange={onChange} name="name" Placeholder='Ingresa tu nombre' />

    </FormGroup>

    <Form.Group>

      <Form.Label>Apellidos:</Form.Label>

      <Form.Control onChange={onChange} name="last_name" Placeholder='Ingresa tus Apellidos' />

    </Form.Group>

    <Form.Group>

      <Form.Label> Correo :</Form.Label>
      
      <Form.Control onChange={onChange} name="email" Placeholder='Ingresa tus correo' type='email' />

    </Form.Group>

    <Form.Group>

      <Form.Label>Num. Telefonico:</Form.Label>

      <Form.Control onChange={onChange} name="number" Placeholder='Ingresa tus Numero' type="number" />

    </Form.Group>

    <Form.Group>
      <Form.Label>En pocas palabras, dinos por que te quieres dar de alta con nosotros:</Form.Label>

      <Form.Control onChange={onChange} name="response" Placeholder='Ingresa tus Respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label>Direccion:</Form.Label>

      <Form.Control onChange={onChange} name='address' Placeholder='Ingresa tus direcciones' />

    </Form.Group>
<Button onClick= {()=>onClick}>Enviar</Button>
<Button type ="reset">Cancelar</Button>
  </Form>

)


}

export default FormComponent;