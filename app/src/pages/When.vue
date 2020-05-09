<template>
  <q-page class="row items-center justify-evenly">
    <diner-list-component
      title="DinerList component"
      :dinerList="dinerList"
      active
    ></diner-list-component>
  </q-page>
</template>

<script lang="ts">
import DinerListComponent from 'components/DinerListComponent.vue'
import { Diner } from 'components/models'

export default {
  name: 'PageWhat',
  components: { DinerListComponent },
  data () {
    const dinerList: Diner[] = [
      {
        id: 1,
        name: 'Soirée Italie',
        date: '11/09/20'
      },
      {
        id: 2,
        name: 'Soirée Jap',
        date: '11/09/20'
      },
      {
        id: 3,
        name: 'Soirée Chine',
        date: '11/09/20'
      },
      {
        id: 4,
        name: 'Soirée Tartare',
        date: '11/09/20'
      },
      {
        id: 5,
        name: 'Soirée Sucre',
        date: '11/09/20'
      }
    ]
    return { dinerList }
  }
}
</script>
