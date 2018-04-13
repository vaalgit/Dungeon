<template lang="pug">
    .floater
      .role-content
        ul.nav.nav-pills.mb-3.nav-justified(role="tablist")
          li.nav-item
            a.nav-link.active(data-toggle="pill" role="tab" href="#pills-roles" aria-controls="pills-roles" aria-selected="true") Roles
              
          li.nav-item
            a.nav-link(data-toggle="pill" role="tab" href="#pills-items" aria-controls="pills-items" aria-selected="false") Items
            
          li.nav-item
            a.nav-link(data-toggle="pill" role="tab" href="#pills-dungeons" aria-controls="pills-dungeons" aria-selected="false") Dungeons


        .tab-content
          .tab-pane.fade.show.active(id="pills-roles" role="tabpanel" aria-labelledby="pills-roles-tab")
            .content roles test content
          .tab-pane.fade.show(id="pills-items" role="tabpanel" aria-labelledby="pills-items-tab")
            .content items test content
          .tab-pane.fade.show(id="pills-dungeons" role="tabpanel" aria-labelledby="pills-dungeons-tab")
            .content dungeons test content

</template>

<script>
export default {
  data () {
    return {
      message: 'Helo, Vue.js 2.0'
    }
  }
}
</script>

<style lang="sass">
.floater
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0 auto;
  &:before
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;

.role-content
  padding-top: 5%;
  padding-bottom: 5%;
  border: 2px solid blue
  display: inline-block;
  vertical-align: middle;
  width: 70%;
  height: 75%;
  background: rgb(128,128,128)

.nav.nav-tabs.nav-justified
  > a
    height: 100px

</style>