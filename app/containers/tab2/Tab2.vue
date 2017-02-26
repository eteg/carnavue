<template>
  <form class="form-horizontal">
    <fieldset style="margin: 1em">

      <!-- Form Name -->
      <legend>Form Name</legend>

      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="textinput">Text Input</label>
        <div class="col-md-4">
          <input id="textinput" name="textinput" type="text" placeholder="placeholder" class="form-control input-md">
          <span class="help-block">help</span>
        </div>
      </div>

      <!-- Search input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="searchinput">Search Input</label>
        <div class="col-md-4">
          <input id="searchinput" name="searchinput" type="search" placeholder="placeholder" class="form-control input-md">
          <p class="help-block">help</p>
        </div>
      </div>

      <!-- Password input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="passwordinput">Password Input</label>
        <div class="col-md-4">
          <input id="passwordinput" name="passwordinput" type="password" placeholder="placeholder" class="form-control input-md">
          <span class="help-block">help</span>
        </div>
      </div>

      <!-- Appended checkbox -->
      <div class="form-group">
        <label class="col-md-4 control-label" for="appendedcheckbox">Appended Checkbox</label>
        <div class="col-md-4">
          <div class="input-group">
            <input id="appendedcheckbox" name="appendedcheckbox" class="form-control" type="text" placeholder="placeholder">
            <span class="input-group-addon">     
          <input type="checkbox">     
      </span>
          </div>
          <p class="help-block">help</p>
        </div>
      </div>

      <!-- Prepended text-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="prependedtext">Prepended Text</label>
        <div class="col-md-4">
          <div class="input-group">
            <span class="input-group-addon">prepend</span>
            <input id="prependedtext" name="prependedtext" class="form-control" placeholder="placeholder" type="text">
          </div>
          <p class="help-block">help</p>
        </div>
      </div>

    </fieldset>
  </form>

</template>

<script>
  import EtegFieldset from '../../components/EtegFieldset.vue';

  export default {
    components: { EtegFieldset }
  }

</script>