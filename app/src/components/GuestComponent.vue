<template>
  <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">{{guest.name}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ guest.content }}
      </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Guest } from './models'

export default defineComponent({
  name: 'GuestComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    guest: {
      type: (Object as unknown) as PropType<Guest>,
      default: () => []
    }
  }
})
</script>
