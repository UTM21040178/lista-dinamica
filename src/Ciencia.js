import { Button, Card, CardBody, CardTitle, Container, Form,FormGroup } from "react-bootstrap";


const Ciencia = ({onChange, onClick}) =>{

return(
  <Container>
  <Card className="mt-3" style={{ backgroundColor: 'LightBlue' }}>
     <CardBody>

     <CardTitle>

      Ciencia y medio ambiente

    </CardTitle>

    <Form>

    <FormGroup>

      <Form.Label>1. ¿Cómo crees que la ciencia puede contribuir a la conservación de especies en peligro de extinción?</Form.Label>

      <Form.Control onChange={onChange} name="question1" Placeholder='Escribe tu respuesta con argumentos' as="textarea" />

    </FormGroup>

    <Form.Group>

      <Form.Label>2.  Explica el papel de la energía renovable en la lucha contra el cambio climático.</Form.Label>

      <Form.Control onChange={onChange} name="question2" Placeholder='Escribe tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label>3. ¿De qué manera la agricultura sostenible puede mitigar el impacto ambiental?</Form.Label>
      
      <Form.Control onChange={onChange} name="question3" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>

      <Form.Label>4. ¿Qué desafíos enfrenta la humanidad para lograr una economía circular?</Form.Label>

      <Form.Control onChange={onChange} name="question4" Placeholder='Escribe tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>
      <Form.Label>5. ¿Qué papel tiene la biotecnología en la sostenibilidad ambiental?</Form.Label>

      <Form.Control onChange={onChange} name="question5" Placeholder='Escribe tus Respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label>6. ¿Cómo afecta la contaminación plástica a los ecosistemas marinos? </Form.Label>

      <Form.Control onChange={onChange} name='question6' Placeholder='Ingresa tu respuesta' as="textarea" />

    </Form.Group>
<Button onClick= {()=>onClick}>Enviar</Button>

  </Form>
  </CardBody>
  </Card>
  </Container>
)


}

export default Ciencia;
