import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
       <img src='/assets/logo.svg' alt=''></img> 
        <NewTransactionButton>
            Nova Transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer> 
  );
}
