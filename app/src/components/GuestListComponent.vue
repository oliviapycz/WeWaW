<template>
  <q-list borderedless style="width: 100%; min-height: 100vh">
    <q-item :to="'/who/' + guest.id"  v-for="guest in guestList" :key="guest.id" class="q-my-sm" clickable v-ripple>
      <q-item-section avatar>
        <q-avatar color="primary" text-color="white">
          {{ guest.letter }}
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ guest.name }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-icon name="chat_bubble" color="secondary" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Guest } from './models'

export default defineComponent({
  name: 'GuestListComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    guestList: {
      type: (Array as unknown) as PropType<Guest[]>,
      default: () => []
    }
  }
})
</script>
