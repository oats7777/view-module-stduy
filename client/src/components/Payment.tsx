import usePaymentMethods from '../hooks/usePaymentMethods';
import { useRoundUp } from '../hooks/useRoundUp';
import { PaymentMethods } from './PaymentMethods';
import { DonationCheckbox } from './DonationCheckbox';

const formatCheckboxLabel = (
  agreeToDonate: boolean,
  tip: number,
  countryCode: string
) => {
  const currencySign = countryCode === 'JP' ? '¥' : '$';
  return agreeToDonate
    ? 'Thanks for your donation.'
    : `I would like to donate ${currencySign}${tip} to charity.`;
};

export const Payment = ({
  amount,
  countryCode,
}: {
  amount: number;
  countryCode: string;
}) => {
  const { paymentMethods } = usePaymentMethods();
  const { agreeToDonate, total, tip, updateAgreeToDonate } = useRoundUp(
    amount,
    countryCode
  );

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip, countryCode)}
      />
      <button>
        {countryCode === 'JP' ? '¥' : '$'}
        {total}
      </button>
    </div>
  );
};
