import { computed, watch } from 'vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import {useStore} from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginForm() {
  const store = useStore()
  const router = useRouter()
  const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
      'email',
      yup
        .string()
        .trim()
        .required('Пожалуйста заполните поле')
        .email('необходимо указать корректный email')
    )
    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
      'password',
      yup
        .string()
        .trim()
        .required('Пожалуйста заполните поле')
        .min(6, 'Минимальная длина 6 символов')
    )

      const isToManyAttempts = computed(() => submitCount.value >= 3)

      watch(isToManyAttempts, val => {
        if (val) {
          setTimeout(() => submitCount.value = 0, 5000)
        }
      })

      const onSubmit = handleSubmit(async (values) => {
        console.log(values);
        try {
          await store.dispatch('auth/login', values)
          router.push('/')
        } catch (e) {

        }

      })


    return {
      email,
      eError,
      eBlur,
      password,
      pError,
      pBlur,
      onSubmit,
      isSubmitting,
      isToManyAttempts
    }
}
