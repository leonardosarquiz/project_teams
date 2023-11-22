
import { useNavigation } from "@react-navigation/native"
import { Container, Logo, BackButton, BackIcon } from "./styles";



import logoImg from '@assets/logo.png';
;


type Props = {
  showBackButton?: boolean;

}



export function Header({ showBackButton = false, }: Props) {

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('groups')
  }
  return (
    <Container>

      {showBackButton &&
        <BackButton onPress={handleGoBack}>


          <BackIcon name="left" size={31} />

        </BackButton>
      }


      <Logo source={logoImg} />
    </Container>
  )
}