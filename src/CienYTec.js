import { Button, Card, CardBody, CardTitle, Container, Form,FormGroup } from "react-bootstrap";


const CienYTec = ({onChange, onClick}) =>{

return(
  <Container>
  <Card className="mt-3" style={{ backgroundColor: 'purple' }}>
     <CardBody>

     <CardTitle style={{ color: 'White' }}>

       Ciencia y Tecnologia

    </CardTitle>

    <Form>

    <FormGroup>

      <Form.Label style={{ color: 'White' }}>1.¿Qué importancia tiene la ciencia de datos en la toma de decisiones empresariales??</Form.Label>

      <Form.Control onChange={onChange} name="question1" Placeholder='Argumenta tu respuesta' as="textarea" />

    </FormGroup>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>2. Explica cómo la inteligencia artificial está revolucionando el campo de la medicina.</Form.Label>

      <Form.Control onChange={onChange} name="question2" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>3.¿Qué rol juegan los avances en materiales en la innovación tecnológica?</Form.Label>
      
      <Form.Control onChange={onChange} name="question3" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>4. ¿Cómo influye la computación cuántica en el futuro de la ciberseguridad?</Form.Label>

      <Form.Control onChange={onChange} name="question4" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>
      <Form.Label style={{ color: 'White' }}>5. ¿Qué impacto tienen los vehículos autónomos en la industria del transporte?</Form.Label>

      <Form.Control onChange={onChange} name="question5" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>6. ¿Cómo afecta el desarrollo de robots en la automatización industrial? </Form.Label>

      <Form.Control onChange={onChange} name='question6' Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>
<Button onClick= {()=>onClick}>Enviar</Button>

  </Form>
  </CardBody>
  </Card>
  </Container>
)


}

export default CienYTec;
