import { Button, Card, CardBody, CardTitle, Container, Form,FormGroup } from "react-bootstrap";


const Filosofia = ({onChange, onClick}) =>{

return(
  <Container>
  <Card className="mt-3" style={{ backgroundColor: 'black' }}>
     <CardBody>

     <CardTitle style={{ color: 'White' }}>

       Filosofia y salud mental

    </CardTitle>

    <Form>

    <FormGroup>

      <Form.Label style={{ color: 'White' }}>1. ¿Cuál es el significado de la "libertad" en la filosofía de Jean-Paul Sartre?</Form.Label>

      <Form.Control onChange={onChange} name="question1" Placeholder='Argumenta tu respuesta' as="textarea" />

    </FormGroup>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>2. Explica la relación entre el estrés y las enfermedades físicas.</Form.Label>

      <Form.Control onChange={onChange} name="question2" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>3. Explica el concepto de "justicia" según John Rawls.</Form.Label>
      
      <Form.Control onChange={onChange} name="question3" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>4. ¿Qué impacto tiene el relativismo moral en la sociedad contemporánea?</Form.Label>

      <Form.Control onChange={onChange} name="question4" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>
      <Form.Label style={{ color: 'White' }}>5.  ¿Cómo ha evolucionado la concepción del "bien común" a lo largo de la historia de la filosofía?</Form.Label>

      <Form.Control onChange={onChange} name="question5" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>6.  ¿Qué desafíos plantea la ética en el ámbito de la inteligencia artificial? </Form.Label>

      <Form.Control onChange={onChange} name='question6' Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>
<Button onClick= {()=>onClick}>Enviar</Button>

  </Form>
  </CardBody>
  </Card>
  </Container>
)


}

export default Filosofia;
