import { Button, Card, CardBody, CardTitle, Container, Form,FormGroup } from "react-bootstrap";


const Psicologia = ({onChange, onClick}) =>{

return(
  <Container>
  <Card className="mt-3" style={{ backgroundColor: 'red' }}>
     <CardBody>

     <CardTitle style={{ color: 'White' }}>

        Psicologia y salud mental

    </CardTitle>

    <Form>

    <FormGroup>

      <Form.Label style={{ color: 'White' }}>1.¿Cómo influyen las redes sociales en la autoestima de los adolescentes?</Form.Label>

      <Form.Control onChange={onChange} name="question1" Placeholder='Argumenta tu respuesta' as="textarea" />

    </FormGroup>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>2. Explica la relación entre el estrés y las enfermedades físicas.</Form.Label>

      <Form.Control onChange={onChange} name="question2" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>3. ¿Qué factores psicológicos influyen en la toma de decisiones?</Form.Label>
      
      <Form.Control onChange={onChange} name="question3" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>4. ¿De qué manera la pandemia afectó la salud mental a nivel global??</Form.Label>

      <Form.Control onChange={onChange} name="question4" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>
      <Form.Label style={{ color: 'White' }}>5. ¿Cómo se puede mejorar el bienestar emocional en el entorno laboral?</Form.Label>

      <Form.Control onChange={onChange} name="question5" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>6. ¿Qué impacto tiene la meditación en el control de la ansiedad? </Form.Label>

      <Form.Control onChange={onChange} name='question6' Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>
<Button onClick= {()=>onClick}>Enviar</Button>

  </Form>
  </CardBody>
  </Card>
  </Container>
)


}

export default Psicologia;
