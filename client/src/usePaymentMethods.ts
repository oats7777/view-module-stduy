import { useEffect, useState } from 'react';
import PaymentMethod from './PaymentMethod';
import { RemotePaymentMethod } from './types';

const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const url = 'http://localhost:8080/';

      const response = await fetch(url);
      const methods: RemotePaymentMethod[] = await response.json();
      setPaymentMethods(convertPaymentMethods(methods));
    };

    fetchPaymentMethods();
  }, []);

  return {
    paymentMethods,
  };
};

const convertPaymentMethods = (methods: RemotePaymentMethod[]) => {
  if (methods.length === 0) {
    return [];
  }

  const payInCash = new PaymentMethod({ name: 'cash' });

  const extended: PaymentMethod[] = methods.map(
    (method) => new PaymentMethod(method)
  );
  extended.push(payInCash);

  return extended;
};

export default usePaymentMethods;
