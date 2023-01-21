import { Heading, MultiStep, Text, TextInput, Button } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Container, Form, Header } from './styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Welcome to Ignite Call!</Heading>
        <Text>
          We need some information to create your profile! You can edit this
          information later.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label>
          <Text size="sm">Username</Text>
          <TextInput prefix="ignite.com/" placeholder="your-username" />
        </label>
        <label>
          <Text size="sm">Full name</Text>
          <TextInput placeholder="Your name" />
        </label>
        <Button type="submit">
          Next step
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
