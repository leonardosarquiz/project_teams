import { Header } from '@components/Header';
import { Container, Content, Icon } from './styles';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';


export function NewGroup() {

  return (
    <Container>
      <Header showBackButton />

      <Content>

        <Icon name="users" size={56} />
        <Highlight title='Nova turma' subtitle='Crie a turma para adicionar as pessoas' />


        <Button title='Criar' />

      </Content>
    </Container>
  )
}