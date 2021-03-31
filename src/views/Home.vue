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
      :request="[]"
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
import {ref} from 'vue'
import RequestTable from '../components/request/RequestTable.vue'
import AppPage from '../components/ui/AppPage.vue'
import AppModal from '../components/ui/AppModal.vue'
import RequestModal from '../components/request/RequestModal.vue'

export default {
  setup() {
    const modal = ref(false);

    return {
      modal,
      close: () => modal.value = false,
    }
  },
  components: { AppPage, RequestTable, AppModal, RequestModal },
  name: 'Home',
}
</script>
