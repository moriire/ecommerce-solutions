<template>
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation" v-for="tab in tabs" :key="tab.id">
        <button
          class="nav-link"
          :class="{ active: tab.id === activeTab }"
          :id="`${tab.id}-tab`"
          data-bs-toggle="tab"
          :data-bs-target="`#${tab.id}`"
          type="button"
          role="tab"
          :aria-controls="tab.id"
          :aria-selected="tab.id === activeTab"
          @click="selectTab(tab.id)"
        >
          {{ tab.label }}
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade"
        :class="{ show: tab.id === activeTab, active: tab.id === activeTab }"
        v-for="tab in tabs"
        :key="tab.id"
        :id="tab.id"
        role="tabpanel"
        :aria-labelledby="`${tab.id}-tab`"
      >
        <slot :name="tab.id"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const activeTab = ref(props.tabs[0].id);

    const selectTab = (id) => {
      activeTab.value = id;
    };

    return {
      activeTab,
      selectTab,
    };
  },
};
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
</style>