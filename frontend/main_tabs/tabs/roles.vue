<template lang="pug">
    div.row
        div.col-3
            .nav.flex-column.nav-pills.role-sub-tab(role="tablist" aria-orientation="vertical")
                a.nav-link.active(id="v-pills-home-tab" data-toggle="pill" href="#v-index-tab" role="tab" aria-controls="index-tab" aria-selected="true") first tab
                a.nav-link.btn.btn-info(@click="add_content" id="v-pills-home-tab" role="tab" data-target="#add_role_modal" data-toggle="modal" type="button") add
        div.col-9
            role-tab-contents(:tab_content_list="tab_content_list")
            //- .tab-content.role-sub-content(id="v-pills-tabContent" v-for="item in tab_content_list")
            //- 	.tab-pane.fade.show.active(id="v-index-tab" role="tabpanel" aria-labelledby="index-tab-tab") {{item}}
        
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
        add-role(:tab_id="tab_id")
</template>

<script>
import Vue from "vue";
import AddRole from "./utils/addRole.vue";
import RoleTabContents from "./roleTabContents.vue";

export default {
    name: "roles-tab",
    components: {
        AddRole,
        RoleTabContents
    },
    data() {
        return {
            message: "this is role component",
            role_info: {
                character: 0,
                attr: {
                    STR: 0,
                    MAG: 0,
                    DEX: 0,
                    SPD: 0,
                    CON: 0,
                    AR: 0,
                    Resist: 0
                }
            },
            tab_id_list: [],
            tab_id: "",
            tab_content_list: [['v-index-tab',"index-tab"]]
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
            this.tab_id = "role_" + id;
            if ($.inArray(this.tab_id, this.tab_id_list) != -1) {
                return;
            }
            this.tab_id_list.push(this.tab_id);

            console.log(this.tab_id);
            // $(e.target)
            //   .closest("a")
            //   .before(
            //     '<a class="nav-link" data-toggle="pill" role="tab" aria-controls="v-pills-home" href="#contact_' +
            //       id +
            //       '">New Tab</a>'
            //   );
            // $(".tab-content.role-sub-content").append(
            //   '<div class="tab-pane" id="' +
            //     tabId +
            //     '"> ' +
            //     this.role_info +
            //     "</div>"
            // );
            // $(".nav-pills.role-sub-tab a:nth-child(" + id + ")").click();
            // // $("#add_role_modal").modal("show");
            // var role_tab_target = $(".nav-pills.role-sub-tab a:nth-child(" + id + ")");
            // this.$on('role_tab_name',(name)=>{
            // 	if (name == '') {
            // 		name = tabId;
            // 	}
            // 	role_tab_target[0].text = name;
            // 	console.log('triggered role_tab_name event');
            // });
            var vm = this;
            this.$on("role_submit", (info, _tabId, role_name) => {
                if (info == "") {
                    info = vm.role_info;
                }
                vm.role_info = info;
                console.log("info = ", info);
                console.log("_tabId = ", _tabId);
                console.log("role_name = ", role_name);
                $(e.target)
                    .closest("a")
                    .before(
                        '<a class="nav-link" data-toggle="pill" role="tab" aria-controls="v-pills-home" href="#role_' +
                            id +
                            '">' +
                            role_name +
                            "</a>"
                    );
                console.log('vm.tab_content_list.push(role_name);')
                vm.tab_content_list.push(['role_'+id,role_name]);
                console.log('vm.tab_content_list = ',vm.tab_content_list);

                // $(".tab-content.role-sub-content").append(
                //     '<div class="tab-pane" id="' +
                //         vm.tab_id +
                //         '"> ' +
                //         vm.role_info.character +
                //         "</div>"
                // );
                $(".nav-pills.role-sub-tab a:nth-child(" + id + ")").click();
                // var role_tab_target = $(
                //     ".nav-pills.role-sub-tab a:nth-child(" + id + ")"
                // );
                // this.$on("role_tab_name", name => {
                //     if (name == "") {
                //         name = vm.tab_id;
                //     }
                //     role_tab_target[0].text = name;
                //     console.log("triggered role_tab_name event");
                // });

                var index = vm.tab_id_list.indexOf(_tabId);
                if (index !== -1) vm.tab_id_list.splice(index, 1);
            });
        },
        refresh() {}
    }
};
</script>

<style lang="sass">


</style>