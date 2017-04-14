<template>
  <div class="panel-group" :id="idPanelGroup" role="tablist" aria-multiselectable="true">
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" :id="idPanelHeading">
        <h4 class="panel-title">
          <a role="button" data-toggle="collapse" :data-parent="'#' + idPanelGroup" :href="'#' + idCollapse" aria-expanded="true" :aria-controls="idCollapse">
           {{title | capitalize}}
        </a>
        </h4>
      </div>
      <div :id="idCollapse" class="panel-collapse collapse in" role="tabpanel" :aria-labelledby="idPanelHeading">
        <div class="panel-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import hFilters from '~/plugins/filters.js'

export default {
  props: ['title'],

  data () {
    return {
      open: true,
      idPanelGroup: '',
      idPanelHeading: '',
      idCollapse: ''
    }
  },

  mounted () {
    const uid = this._uid // eslint-disable-line no-underscore-dangle
    this.idPanelGroup = `idPanelGroup${uid}`
    this.idPanelHeading = `idPanelHeading${uid}`
    this.idCollapse = `idCollapse${uid}`
  },

  filters: {
    capitalize: hFilters.upperCase
  }

}
</script>

