<template>
  <nav class="navbar">
    <h3>
      Online Bank
    </h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">
          Заявки
        </router-link>
      </li>
      <li>
        <router-link to="/">
          Помощь
        </router-link>
      </li>
      <li>
        <a href="#">
          Сообщение
        </a>
      </li>
        <li>
        <a href="#" @click.prevent="logout">
          Выход
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const logout = () => {
      store.commit('auth/logout')
      router.push('/auth')
    }

    return {
      logout
    }
  }
}
</script>

<style>

</style>
