<template lang="pug">
div.tab-content.role-sub-content
    .tab-pane.fade.show(v-for="item in content_list" :id="item[0]" role="tabpanel" aria-labelledby="index-tab-tab") {{item[1]}}
</template>

<script>
export default {
    name: "role-tab-contents",
    props: ["tab_content_list"],
    data() {
        return {
            content_list:[]
        };
    },
    mounted() {
        this.content_list = this.tab_content_list;
        console.log('get content_list = ',this.content_list);
    },
    methods: {}
};
</script>

<style lang="sass">


</style>