<template>
  <div id="fapp">
    <Tabs :tabs="tabs" initial-tab="tab1"></Tabs>
  </div>
  </template>
  
  <script>
  import Tabs from './Tabs.vue';
  import Tab from './Tab.vue';
  
  export default {
    name: 'App',
    components: {
      Tabs,
      Tab
    },
    data() {
    return {
      tabs: [
        { name: 'tab1', title: 'Tab 1', component: Tab },
        { name: 'tab2', title: 'Tab 2', component: Tab },
        { name: 'tab3', title: 'Tab 3', component: Tab },
      ],
    };
  },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  