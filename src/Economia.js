import { Button, Card, CardBody, CardTitle, Container, Form,FormGroup } from "react-bootstrap";


const Economia = ({onChange, onClick}) =>{

return(
  <Container>
  <Card className="mt-3" style={{ backgroundColor: 'cyan' }}>
     <CardBody>

     <CardTitle>

      Economia y finanzas

    </CardTitle>

    <Form>

    <FormGroup>

      <Form.Label>1. ¿Cómo afecta la inflación al poder adquisitivo de los ciudadanos?</Form.Label>

      <Form.Control onChange={onChange} name="question1" Placeholder='Argumenta tu respuesta' as="textarea" />

    </FormGroup>

    <Form.Group>

      <Form.Label>2. ¿Qué rol desempeñan los bancos centrales en la economía de un país?</Form.Label>

      <Form.Control onChange={onChange} name="question2" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label>3.¿Cómo influyen las tasas de interés en las decisiones de inversión de las empresas?</Form.Label>
      
      <Form.Control onChange={onChange} name="question3" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>

      <Form.Label>4. ¿Qué impacto tiene el comercio internacional en el crecimiento económico?</Form.Label>

      <Form.Control onChange={onChange} name="question4" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>
      <Form.Label>5.  ¿De qué manera la automatización está transformando el sector manufacturero?</Form.Label>

      <Form.Control onChange={onChange} name="question5" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label>6. ¿Cómo afecta el crecimiento del comercio electrónico a las pequeñas empresas? </Form.Label>

      <Form.Control onChange={onChange} name='question6' Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>
<Button onClick= {()=>onClick}>Enviar</Button>

  </Form>
  </CardBody>
  </Card>
  </Container>
)


}

export default Economia;
