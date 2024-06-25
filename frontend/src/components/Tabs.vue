<!-- src/components/BootstrapTabs.vue -->
<template>
    <div>
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item" v-for="tab in tabs" :key="tab.name">
          <button
            class="nav-link"
            :class="{ active: activeTab === tab.name }"
            @click="selectTab(tab.name)"
            :id="`${tab.name}-tab`"
            data-bs-toggle="tab"
            :data-bs-target="`#${tab.name}`"
            type="button"
            role="tab"
            :aria-controls="tab.name"
            :aria-selected="activeTab === tab.name ? 'true' : 'false'"
          >
            {{ tab.title }}
          </button>
        </li>
      </ul>
      <div class="tab-content">
        <div
          class="tab-pane fade"
          :class="{ show: activeTab === tab.name, active: activeTab === tab.name }"
          v-for="tab in tabs"
          :key="tab.name"
          :id="tab.name"
          role="tabpanel"
          :aria-labelledby="`${tab.name}-tab`"
        >
          <component :is="tab.component"></component>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabs: {
        type: Array,
        required: true,
      },
      initialTab: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        activeTab: this.initialTab || this.tabs[0].name,
      };
    },
    methods: {
      selectTab(tabName) {
        this.activeTab = tabName;
      },
    },
  };
  </script>
  
  <style scoped>
  .nav-tabs .nav-link.active {
    background-color: #007bff;
    color: white;
  }
  </style>
  