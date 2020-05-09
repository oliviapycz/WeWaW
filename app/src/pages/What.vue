<template>
  <q-page class="row items-center justify-evenly">
    <food-list-component
      title="FoodList component"
      :foodList="foodList"
      active
    ></food-list-component>
  </q-page>
</template>

<script lang="ts">
import FoodListComponent from 'components/FoodListComponent.vue'
import { Food } from 'components/models'

export default {
  name: 'PageWhat',
  components: { FoodListComponent },
  data () {
    const foodList: Food[] = [
      {
        id: 1,
        name: 'Bar',
        content: 'ct1'
      },
      {
        id: 2,
        name: 'Poulet',
        content: 'ct2'
      },
      {
        id: 3,
        name: 'Boeuf',
        content: 'ct3'
      },
      {
        id: 4,
        name: 'Salade',
        content: 'ct4'
      },
      {
        id: 5,
        name: 'Mousse au chocolat',
        content: 'ct5'
      }
    ]
    return { foodList }
  }
}
</script>
