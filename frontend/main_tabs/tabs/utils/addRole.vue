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
            div.row-2.btn-group.btn-group-toggle.role-options
              .btn-group-vertical.btn-group-toggle
                label.btn.btn-success Warrior
                  input(type="radio"  name="char-radio"  v-model="radio_role" autocomplete="off" :value="0" )
                label.btn.btn-success Mage
                  input(type="radio"  name="char-radio"  v-model="radio_role" autocomplete="off" :value="1" )
              .btn-group-vertical.btn-group-toggle
                label.btn.btn-success Musketeer
                  input(type="radio"  name="char-radio"  v-model="radio_role" autocomplete="off" :value="2")
                label.btn.btn-success Barbarian
                  input(type="radio"  name="char-radio"  v-model="radio_role" autocomplete="off" :value="3" )
              .btn-group-vertical.btn-group-toggle
                label.btn.btn-success Clergy
                  input(type="radio"  name="char-radio"  v-model="radio_role" autocomplete="off" :value="4")
                label.btn.btn-success Stalker
                  input(type="radio"  name="char-radio"  v-model="radio_role" autocomplete="off" :value="5" )
            div Selected : 
              span.select-role {{ role_table[radio_role] }}
            hr
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
            <span>name: {{ role_name }}</span>
            
        .modal-footer
          button.btn.btn-default(@click="confirm_add" type="button" data-dismiss="modal") Add
          button.btn.btn-default(type="button" data-dismiss="modal") Close
</template>

<script>
export default {
    name: "add-role",
    props: ["tab_id"],
    data() {
        return {
            message: "this is add role component",
            role_name: "",
            role_details: {
                STR: 0,
                MAG: 0,
                DEX: 0,
                SPD: 0,
                CON: 0,
                AR: 0,
                Resist: 0
            },
            radio_role: "unknow",
            role_table: {
                "0": "Warrior",
                "1": "Mage",
                "2": "Musketeer",
                "3": "Barbarian",
                "4": "Clergy",
                "5": "Stalker"
            },
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
            }
        };
    },
    mounted() {
        console.log("add-roles.vue mounted.");
    },
    methods: {
        confirm_add() {
            // this.$parent.$emit("role_tab_name", this.role_name);
            // this.$parent.$off(["role_tab_name"]);

            this.role_info.character = this.role_table[this.radio_role];
            this.role_info.attr = this.role_details;
            console.log("this.role_info = ", this.role_info);
            console.log("this.tab_id= ", this.tab_id);
            console.log("this.role_name= ", this.role_name);
            this.$parent.$emit(
                "role_submit",
                this.role_info,
                this.tab_id,
                this.role_name
            );
            this.$parent.$off(["role_submit"]);
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

.select-role
  font-weight: 600
  font-size: 24px

</style>