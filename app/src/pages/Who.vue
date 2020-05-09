<template>
  <q-page class="row items-center justify-evenly">
    <guest-list-component
      title="GuestList component"
      :guestList="guestList"
      active
    ></guest-list-component>
  </q-page>
</template>

<script lang="ts">
import GuestListComponent from 'components/GuestListComponent.vue'
import { Guest } from './components/models'

export default {
  name: 'PageWho',
  components: { GuestListComponent },
  data () {
    const guestList: Guest[] = [
      {
        id: 1,
        name: 'Olivia',
        letter: 'O',
        content: 'ct1'
      },
      {
        id: 2,
        name: 'Cécile',
        letter: 'C',
        content: 'ct2'
      },
      {
        id: 3,
        name: 'Jana',
        letter: 'J',
        content: 'ct3'
      },
      {
        id: 4,
        name: 'Alan',
        letter: 'A',
        content: 'ct4'
      },
      {
        id: 5,
        name: 'Agathe',
        letter: 'A',
        content: 'ct5'
      }
    ]
    return { guestList }
  }
}
</script>
