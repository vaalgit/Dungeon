<template lang="pug">
    div {{message}}
</template>

<script>
export default {
    name: "dungeons-tab",
    data() {
        return {
            message: "this is dungeons component"
        };
    },
    mounted(){
		console.log('dungeons.vue mounted.');
	}
};
</script>

<style lang="sass">


</style>