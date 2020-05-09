<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="food in foodList" :key="food.id">
        {{ food.id }} - {{ food.name }}- {{ food.content }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Food } from './models'

export default defineComponent({
  name: 'FoodListComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    foodList: {
      type: (Array as unknown) as PropType<Food[]>,
      default: () => []
    }
  }
})
</script>
