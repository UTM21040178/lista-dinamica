import { Button, Card, CardBody, CardTitle, Container, Form,FormGroup } from "react-bootstrap";


const Historia = ({onChange, onClick}) =>{

return(
  <Container>
  <Card className="mt-3" style={{ backgroundColor: 'Lightgray' }}>
     <CardBody>

     <CardTitle>

      Historia y politica

    </CardTitle>

    <Form>

    <FormGroup>

      <Form.Label>1.  ¿Cuáles fueron las principales causas de la Primera Guerra Mundial?</Form.Label>

      <Form.Control onChange={onChange} name="question1" Placeholder='Escribe tu respuesta con argumentos' as="textarea" />

    </FormGroup>

    <Form.Group>

      <Form.Label>2.  Explica el impacto de la Revolución Industrial en la configuración de las sociedades modernas.</Form.Label>

      <Form.Control onChange={onChange} name="question2" Placeholder='Escribe tu respuesta con argumentos' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label>3.¿Cómo influyó la Guerra Fría en el desarrollo de la tecnología espacial?</Form.Label>
      
      <Form.Control onChange={onChange} name="question3" Placeholder='Escribe tu respuesta con argumentos' as="textarea"/>

    </Form.Group>

    <Form.Group>

      <Form.Label>4. ¿Qué importancia tuvo el movimiento sufragista en la historia de los derechos humanos?</Form.Label>

      <Form.Control onChange={onChange} name="question4" Placeholder='Escribe tu respuesta con argumentos' as="textarea"/>

    </Form.Group>

    <Form.Group>
      <Form.Label>5.  ¿De qué manera los movimientos independentistas influyeron en la configuración de América Latina?</Form.Label>

      <Form.Control onChange={onChange} name="question5" Placeholder='Escribe tu respuesta con argumentos' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label>6. ¿Qué efectos tuvo la caída del Muro de Berlín en la política internacional? </Form.Label>

      <Form.Control onChange={onChange} name='question6' Placeholder='Escribe tu respuesta con argumentos' as="textarea" />

    </Form.Group>
<Button onClick= {()=>onClick}>Enviar</Button>

  </Form>
  </CardBody>
  </Card>
  </Container>
)


}

export default Historia;
