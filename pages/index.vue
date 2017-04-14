<template>
  <div>
    <eteg-nav-bar />
    <eteg-tabs>
      <eteg-tab title="To Do" active="true">
        <tab1 />
      </eteg-tab>
      <eteg-tab title="Counter">
        <tab2 />
      </eteg-tab>
      <eteg-tab title="tab 3">
        <tab3 />
      </eteg-tab>
      <eteg-tab title="tab 4">
        <tab4 />
      </eteg-tab>
    </eteg-tabs>
  </div>
</template>

<script>
  import EtegNavBar from '~components/EtegNavBar.vue'
  import EtegTabs from '~components/EtegTabs.vue'
  import EtegTab from '~components/EtegTab.vue'
  import Tab1 from '~components/containers/tab1/Tab1.vue'
  import Tab2 from '~components/containers/tab2/Tab2.vue'
  import Tab3 from '~components/containers/tab3/Tab3.vue'
  import Tab4 from '~components/containers/tab4/Tab4.vue'

  export default {
    components: { EtegNavBar, EtegTabs, EtegTab, Tab1, Tab2, Tab3, Tab4 }
  }
</script>
