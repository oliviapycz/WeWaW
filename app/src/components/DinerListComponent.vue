<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="diner in dinerList" :key="diner.id">
        {{ diner.id }} - {{ diner.name }}- {{ diner.date }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Diner } from './models'

export default defineComponent({
  name: 'DinerListComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    dinerList: {
      type: (Array as unknown) as PropType<Diner[]>,
      default: () => []
    }
  }
})
</script>
