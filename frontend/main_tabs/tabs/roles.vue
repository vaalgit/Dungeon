<template lang="pug">
	div.row
		div.col-3
			.nav.flex-column.nav-pills.role-sub-tab(role="tablist" aria-orientation="vertical")
				a.nav-link.active(id="v-pills-home-tab" data-toggle="pill" href="#v-index-tab" role="tab" aria-controls="index-tab" aria-selected="true") first tab
				a.nav-link.btn.btn-info(@click="add_content" id="v-pills-home-tab" role="tab" data-target="#add_role_modal" data-toggle="modal" type="button") add
		div.col-9
			.tab-content.role-sub-content(id="v-pills-tabContent")
				.tab-pane.fade.show.active(id="v-index-tab" role="tabpanel" aria-labelledby="index-tab-tab") index-tab
		
		//- button(id="btn_add_role" style="display:none" type="button" data-toggle="modal" data-target="#add_role_modal")
		//- div.modal.fade(id="add_role_modal" role="dialog")
		//- 	.modal-dialog
		//- 		.modal-content
		//- 			.modal-header
		//- 				button.close( type="button" data-dismiss="modal") x
		//- 				h4.modal-title create role
		//- 			.modal-body
		//- 				input(id="add_role_data")
		//- 			.modal-footer
		//- 				button.btn.btn-default(@click="confirm_add" type="button" data-dismiss="modal") Add
		//- 				button.btn.btn-default( type="button" data-dismiss="modal") Close
		add-role
</template>

<script>
import Vue from "vue"
import AddRole from "./utils/addRole.vue";

export default {
  name: "roles-tab",
  components: {
		AddRole
	},
  data() {
    return {
      message: "this is role component"
    };
  },
  mounted() {
    console.log("roles.vue mounted.");
  },
  methods: {
    add_tab(e) {
      e.preventDefault();
      if (!$(this).hasClass("add-contact")) {
        $(this).tab("show");
      }
    },
    add_content(e) {
      // e.preventDefault();
      var id = $(".nav-pills.role-sub-tab").children().length; //think about it ;)
			var tabId = "role_" + id;
			console.log(tabId);
      $(e.target) 
        .closest("a")
        .before(
          '<a class="nav-link" data-toggle="pill" role="tab" aria-controls="v-pills-home" href="#contact_' +
            id +
            '">New Tab</a>'
        );
      $(".tab-content.role-sub-content").append(
        '<div class="tab-pane" id="' +
          tabId +
          '">Contact Form: New Contact ' +
          id +
          "</div>"
      );
      $(".nav-pills.role-sub-tab a:nth-child(" + id + ")").click();
			// $("#add_role_modal").modal("show");
			var role_tab_target = $(".nav-pills.role-sub-tab a:nth-child(" + id + ")");
			this.$on('role_tab_name',(name)=>{
				if (name == '') {
					name = tabId;
				}
				role_tab_target[0].text = name;
				console.log('triggered role_tab_name event');
			});
		},
  }
};
</script>

<style lang="sass">


</style>