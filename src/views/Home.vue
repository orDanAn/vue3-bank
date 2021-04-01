<template>
  <app-page
    title="Список заявок"
  >
    <template #heder>
      <button
        class="btn primary"
        @click="modal = true"
      >
        Создать
      </button>
    </template>
    <request-table
      :request="request"
    >
    </request-table>
    <teleport to="body">
      <app-modal
        v-if="modal"
        title="Создать заявку"
        @close="modal=false"
      >
        <request-modal @created="modal = false"/>
    </app-modal>
    </teleport>

  </app-page>
</template>

<script>
import {ref, computed} from 'vue'
import RequestTable from '../components/request/RequestTable.vue'
import AppPage from '../components/ui/AppPage.vue'
import AppModal from '../components/ui/AppModal.vue'
import RequestModal from '../components/request/RequestModal.vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore();
    const modal = ref(false);
    const request = computed(() => store.getters['request/requests'])

    return {
      modal,
      close: () => modal.value = false,
      request,
    }
  },
  components: { AppPage, RequestTable, AppModal, RequestModal },
  name: 'Home',
}
</script>
