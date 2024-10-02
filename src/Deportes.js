import { Button, Card, CardBody, CardTitle, Container, Form,FormGroup } from "react-bootstrap";


const Deportes = ({onChange, onClick}) =>{

return(
  <Container>
  <Card className="mt-3" style={{ backgroundColor: 'Gray' }}>
     <CardBody>

     <CardTitle style={{ color: 'White' }}>

        Deportes y salud

    </CardTitle>

    <Form>

    <FormGroup>

      <Form.Label style={{ color: 'White' }}>1.¿Cómo influye la práctica regular de ejercicio en la salud mental?</Form.Label>

      <Form.Control onChange={onChange} name="question1" Placeholder='Argumenta tu respuesta' as="textarea" />

    </FormGroup>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>2.¿Qué factores psicológicos afectan el rendimiento de los atletas de alto rendimiento?</Form.Label>

      <Form.Control onChange={onChange} name="question2" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>3. ¿De qué manera la nutrición influye en el rendimiento deportivo?</Form.Label>
      
      <Form.Control onChange={onChange} name="question3" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>4. ¿Cómo afecta el dopaje en la ética del deporte profesional?</Form.Label>

      <Form.Control onChange={onChange} name="question4" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>
      <Form.Label style={{ color: 'White' }}>5.¿Cómo ha evolucionado la tecnología en el análisis del rendimiento deportivo?</Form.Label>

      <Form.Control onChange={onChange} name="question5" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>6. ¿Qué impacto tiene el deporte en la cohesión social y comunitaria? </Form.Label>

      <Form.Control onChange={onChange} name='question6' Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>
<Button onClick= {()=>onClick}>Enviar</Button>

  </Form>
  </CardBody>
  </Card>
  </Container>
)


}

export default Deportes;
