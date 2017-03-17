<template>
  <div>
    <ul class="nav nav-tabs" role="tablist">
      <li v-for="tab in tabs" role="presentation" :class="{'active' : tab.selected}">
        <a @click="selectTab(tab)" href="#" aria-controls="home" role="tab" data-toggle="tab">{{tab.title}}</a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [],
      };
    },

    created() {
      this.tabs = this.$children;
    },

    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach((tab) => {
          tab.selected = tab.title === selectedTab.title;
        });
      },
    },
  };
</script>
