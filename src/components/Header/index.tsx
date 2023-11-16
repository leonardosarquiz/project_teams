import { Text } from "react-native";
import { Container, Logo, BackButton, BackIcon } from "./styles";



import logoImg from '@assets/logo.png';


type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>

      {showBackButton && (
        <BackButton>
          {/* Use o componente Text para envolver o texto */}
          <Text>
            <BackIcon name="left" size={31} />
          </Text>
        </BackButton>
      )}


      <Logo source={logoImg} />
    </Container>
  )
}