<template>
  <guest-component
    title="Guest component"
    :guest="guest"
  ></guest-component>
</template>

<script lang="ts">
import GuestComponent from 'components/GuestComponent.vue'
import { Guest } from 'components/models'

export default {
  name: 'PageGuest',
  components: { GuestComponent },
  data () {
    const guest: Guest = {
      id: 1,
      name: 'Olivia',
      letter: 'O',
      content: 'ct1'
    }
    return { guest }
  }
}
</script>
