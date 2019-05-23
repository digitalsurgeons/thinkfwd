import { Container } from '../../lib/helpers'

export default ({ fields }) => {
  return (
    <Container>
      {fields.map((field, i) => (
        <div key={i}>
          <p>{field.copy}</p>
        </div>
      ))}
    </Container>
  )
}
