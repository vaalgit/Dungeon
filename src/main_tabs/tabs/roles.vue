<template lang="pug">
	div.row
		div.col-3
			.nav.flex-column.nav-pills.role-sub-tab(role="tablist" aria-orientation="vertical")
				a.nav-link.active(id="v-pills-home-tab" data-toggle="pill" href="#v-index-tab" role="tab" aria-controls="index-tab" aria-selected="true") first tab
				a.nav-link(@click="add_content" id="v-pills-home-tab" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-home" aria-selected="false") add
		div.col-9
			.tab-content.role-sub-content(id="v-pills-tabContent")
				.tab-pane.fade.show.active(id="v-index-tab" role="tabpanel" aria-labelledby="index-tab-tab") index-tab
				

</template>

<script>
export default {
  name: "roles-tab",
  data() {
    return {
      message: "this is role component"
    };
  },
  mounted() {
    console.log("roles.vue mounted.");
  },
	methods:{
		add_tab(e){
			e.preventDefault();
      if (!$(this).hasClass('add-contact')) {
          $(this).tab('show');
      }
		},
		add_content(e){
			e.preventDefault();
			var id = $(".nav-pills.role-sub-tab").children().length; //think about it ;)
			var tabId = 'contact_' + id;
			$(e.target).closest('a').before('<a class="nav-link" data-toggle="pill" role="tab" aria-controls="v-pills-home" href="#contact_' + id + '">New Tab</a>');
			$('.tab-content.role-sub-content').append('<div class="tab-pane" id="' + tabId + '">Contact Form: New Contact ' + id + '</div>');
			$('.nav-pills a:nth-child(' + id + ') a').click();
		}
	}
};
</script>

<style lang="sass">


</style>