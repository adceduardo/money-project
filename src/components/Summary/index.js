import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

// Styles
import { SummaryContainer, SummerCard } from './styles';

export function Summary() {
  return (
    <SummaryContainer>
      <SummerCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00b37e'/>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummerCard>

      <SummerCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#f75a68'/>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummerCard>

      <SummerCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#fff'/>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummerCard>
    </SummaryContainer>
  );
}
