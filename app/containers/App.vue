<template>
  <div id="app">
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
      <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
      <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
      <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="home">
        <tab1></tab1>
      </div>
      <div role="tabpanel" class="tab-pane" id="profile">
        <tab2></tab2>
      </div>
      <div role="tabpanel" class="tab-pane" id="messages">
        <tab3></tab3>
      </div>
      <div role="tabpanel" class="tab-pane" id="settings">
        <tab4></tab4>
      </div>
    </div>
  </div>
</template>

<script>
  import Tab1 from './tab1/Tab1.vue';
  import Tab2 from './tab2/Tab2.vue';
  import Tab3 from './tab3/Tab3.vue';
  import Tab4 from './tab4/Tab4.vue';

  export default {
    components: { Tab1, Tab2, Tab3, Tab4 }
  }

</script>