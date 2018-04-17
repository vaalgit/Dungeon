<template lang="pug">
  div.modal.fade(id="add_role_modal" role="dialog")
    .modal-dialog
      .modal-content
        .modal-header
          h1.modal-title create role
        .modal-body
          div.col
            div.row-2
              p Enter role name
                input(v-model="role_name" placeholder="Enter role name")
            div.row-2.btn-group.btn-group-lg Role: 
              div Apple
                button.btn.btn-primary(type="radio" value="Apple" name="radio")
              div Sony
                button.btn.btn-primary(type="radio" value="Sony" name="radio")
              div Samsung
                button.btn.btn-primary(type="radio" value="Samsung" name="radio")

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
      role_name:''
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


</style>