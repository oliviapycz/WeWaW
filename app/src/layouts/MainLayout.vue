<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          WEWAW
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar class="bg-primary text-white rounded-borders justify-between">
        <q-input dark v-model="text" input-class="text-right" class="q-ml-md" placeholder="type your search here" aria-placeholder="type your search here">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
        <q-btn round color="accent" icon="add" />
      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab to="/who" label="WHO" />
        <q-route-tab to="/what" label="WHAT" />
        <q-route-tab to="/when" label="WHEN" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          made with ❤️ by Cécile & Olivia
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
