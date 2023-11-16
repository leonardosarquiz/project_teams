import { Text, TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string;

}


export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Text>
        <Icon name="users" size={32} />
      </Text>

      <Title>
        {title}
      </Title>
    </Container>
  )
}
