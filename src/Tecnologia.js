import { Button, Card, CardBody, CardTitle, Container, Form,FormGroup } from "react-bootstrap";

const Tecnologia = ({onChange, onClick}) =>{

return(
  <Container>
  <Card className="mt-3" style={{ backgroundColor: 'lightgreen' }}>
     <CardBody>

     <CardTitle>

    Tecnologia y sociedad

    </CardTitle>

    <Form>

    <FormGroup>

      <Form.Label>1. ¿Cómo crees que la inteligencia artificial cambiará el mercado laboral en los próximos 10 años?</Form.Label>

      <Form.Control onChange={onChange} name="question1" Placeholder='Escribe tu respuesta' as="textarea" />

    </FormGroup>

    <Form.Group>

      <Form.Label>2. ¿Qué impacto tiene la tecnología en las relaciones interpersonales?</Form.Label>

      <Form.Control onChange={onChange} name="question2" Placeholder='Escribe tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label>3. Explica cómo las redes sociales han transformado el periodismo.</Form.Label>
      
      <Form.Control onChange={onChange} name="question3" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>

      <Form.Label>4. ¿De qué manera los dispositivos móviles han cambiado la manera en que consumimos información?</Form.Label>

      <Form.Control onChange={onChange} name="question4" Placeholder='Escribte tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>
      <Form.Label>5. ¿Cómo influye la digitalización en el sector educativo?</Form.Label>

      <Form.Control onChange={onChange} name="question5" Placeholder='Escribe tu Respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label>6. ¿Cuál es el rol de la ética en el desarrollo tecnológico? </Form.Label>

      <Form.Control onChange={onChange} name='question6' Placeholder='Ingresa tu respuesta' as="textarea" />

    </Form.Group>
<Button onClick= {()=>onClick}>Enviar</Button>

  </Form>
  </CardBody>
  </Card>
  </Container>
)


}

export default Tecnologia;
