import { Button, Card, CardBody, CardTitle, Container, Form,FormGroup } from "react-bootstrap";


const Cultura = ({onChange, onClick}) =>{

return(
  <Container>
  <Card className="mt-3" style={{ backgroundColor: 'brown' }}>
     <CardBody>

     <CardTitle style={{ color: 'White' }}>

        Cultura y sociedad

    </CardTitle>

    <Form>

    <FormGroup>

      <Form.Label style={{ color: 'White' }}>1. ¿Cómo influyen las tradiciones culturales en la identidad de un país?</Form.Label>

      <Form.Control onChange={onChange} name="question1" Placeholder='Argumenta tu respuesta' as="textarea" />

    </FormGroup>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>2. ¿Qué impacto tiene la globalización en la homogeneización cultural?</Form.Label>

      <Form.Control onChange={onChange} name="question2" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>3.¿Cuál es el papel de la música en la construcción de la identidad juvenil?</Form.Label>
      
      <Form.Control onChange={onChange} name="question3" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>4.¿De qué manera el cine refleja los problemas sociales de una época?</Form.Label>

      <Form.Control onChange={onChange} name="question4" Placeholder='Argumenta tu respuesta' as="textarea"/>

    </Form.Group>

    <Form.Group>
      <Form.Label style={{ color: 'White' }}>5.  ¿Cómo contribuye la literatura a la difusión de ideas filosóficas y políticas?</Form.Label>

      <Form.Control onChange={onChange} name="question5" Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>

    <Form.Group>

      <Form.Label style={{ color: 'White' }}>6. ¿Qué impacto tiene el arte urbano en la transformación de los espacios públicos? </Form.Label>

      <Form.Control onChange={onChange} name='question6' Placeholder='Argumenta tu respuesta' as="textarea" />

    </Form.Group>
<Button onClick= {()=>onClick}>Enviar</Button>

  </Form>
  </CardBody>
  </Card>
  </Container>
)


}

export default Cultura;
