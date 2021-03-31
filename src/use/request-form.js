import { useField, useForm } from "vee-validate";
import * as yup from 'yup';

export function useRequestForm(fn) {
  const {isSubmitting, handleSubmit} = useForm(
    {
      initialValues: {
        status: 'active',
      }
    }
  );

  const {value: fio, errorMessage: fError, handleBlur: fBluer} = useField(
    'fio',
    yup.string()
      .trim()
      .required('Укажите ФИО клиента')
    );
  const {value: phone, errorMessage: pError, handleBlur: pBluer} = useField(
    'phone',
    yup.string()
    .trim()
    .required('Укажите телефон')

    );
  const {value: amount, errorMessage: aError, handleBlur: aBluer} = useField(
    'amount',
    yup.number()
    .required('Введите сумму')
    .min(0, 'Cума не может быть меньше 0')
    );
  const {value: status} = useField('status');

  const onSubmit = handleSubmit(fn)

  return {
    status,
    isSubmitting,
    onSubmit,
    fio,
    fError,
    fBluer,
    phone,
    pError,
    pBluer,
    amount,
    aError,
    aBluer,
  }
}
