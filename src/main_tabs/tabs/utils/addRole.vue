<template lang="pug">
  div.modal.fade(id="add_role_modal" role="dialog")
    .modal-dialog
      .modal-content
        .modal-header
          h1.modal-title create role
        .add-role-modal-body.modal-body
          div.col
            div.row-2
              input(v-model="role_name" placeholder="Enter role name")
            div.row-2.btn-group.btn-group-toggle.role-options(data-toggle="buttons") 
              div Role:
              label.btn.btn-success.active Apple
                input(type="radio" name="options" id="option1" autocomplete="off" checked)
              label.btn.btn-success sss
                input(type="radio" name="options" id="option1" autocomplete="off" )
              label.btn.btn-success bbb
                input(type="radio" name="options" id="option1" autocomplete="off" )
            div.row-2
              .row
                .col-sm-2 STR: 
                .col-sm-10
                  input(v-model="role_details.STR" placeholder="Enter value")
              .row 
                .col-sm-2 MAG:
                .col-sm-10
                  input(v-model="role_details.MAG" placeholder="Enter value")
              .row
                .col-sm-2 DEX:
                .col-sm-10
                  input(v-model="role_details.DEX" placeholder="Enter value")
              .row
                .col-sm-2 SPD:
                .col-sm-10
                  input(v-model="role_details.SPD" placeholder="Enter value")
              .row
                .col-sm-2 CON:
                .col-sm-10
                  input(v-model="role_details.CON" placeholder="Enter value")
              .row
                .col-sm-2 AR:
                .col-sm-10
                  input(v-model="role_details.AR" placeholder="Enter value")
              .row
                .col-sm-2 Resist:
                .col-sm-10
                  input(v-model="role_details.Resist" placeholder="Enter value")

        .modal-footer
          button.btn.btn-default(@click="confirm_add" type="button" data-dismiss="modal") Add
          button.btn.btn-default(type="button" data-dismiss="modal") Close
</template>

<script>
export default {
  name: "add-role",
  data() {
    return {
      message: "this is add role component",
      role_name:'',
      role_details:{
        STR:0,
        MAG:0,
        DEX:0,
        SPD:0,
        CON:0,
        AR:0,
        Resist:0
      }
    };
  },
  mounted() {
    console.log("add-roles.vue mounted.");
  },
  methods:{
    confirm_add(){
      this.$parent.$emit('role_tab_name',this.role_name);
      this.$parent.$off(['role_tab_name']);
    }
  }
};
</script>

<style lang="sass">

.add-role-modal-body
  text-align: left 
  > .col
    > .row-2
      margin-top: 4px
      margin-bottom: 4px


.role-options
  > div
    font-size: 26px
    line-height: normal
  > label
    border-radius: 1

</style>