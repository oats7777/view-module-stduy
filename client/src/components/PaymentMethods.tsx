import PaymentMethod from '../models/PaymentMethod';

export const PaymentMethods = ({ options }: { options: PaymentMethod[] }) => {
  return (
    <div>
      {options.map((method) => (
        <label key={method.provider}>
          <input
            type="radio"
            name="payment"
            value={method.provider}
            defaultChecked={method.isDefaultMethod}
          />
          <span>{method.label}</span>
        </label>
      ))}
    </div>
  );
};
