import { Button, Card, CardBody, CardTitle, Container, Form,FormGroup } from "react-bootstrap";


const Educacion = ({onChange, onClick}) =>{

return(
  <Container>
  <Card className="mt-3" style={{ backgroundColor: 'magenta' }}>
     <CardBody>

     <CardTitle >

     Educación y aprendizaje

    </CardTitle>

    <Form>

    <FormGroup>

      <Form.Label >1. ¿Qué papel juega la motivación intrínseca en el aprendizaje?</Form.Label>

      <Form.Control onChange={onChange} name="question1" Placeholder='Argumenta tu respuesta' as="textarea" />

    </FormGroup>

    <Form.Group>

      <Form.Label >2.¿Cómo pueden las nuevas tecnologías mejorar el proceso de enseñanza-aprendizaje?</Form.Label>

      <Form.Control onChange={onChange} name="question2" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label >3.¿De qué manera el aprendizaje colaborativo fomenta el desarrollo de habilidades blandas?</Form.Label>
      
      <Form.Control onChange={onChange} name="question3" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>

      <Form.Label>4. ¿Cómo influyen los estilos de aprendizaje en la adquisición de conocimientos?</Form.Label>

      <Form.Control onChange={onChange} name="question4" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>
      <Form.Label >5.  ¿Qué importancia tiene el desarrollo del pensamiento crítico en la educación?</Form.Label>

      <Form.Control onChange={onChange} name="question5" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label >6. ¿Cómo puede la educación emocional contribuir a la formación integral de los estudiantes? </Form.Label>

      <Form.Control onChange={onChange} name='question6' Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>
<Button onClick= {()=>onClick}>Enviar</Button>

  </Form>
  </CardBody>
  </Card>
  </Container>
)


}

export default Educacion;
