<template lang="pug">
    div {{message}}
</template>

<script>


export default {
    name: "items-tab",
    data () {
        return {
        message: 'this is items component'
        }
    },
    mounted(){
		console.log('items.vue mounted.');
	}
}
</script>

<style lang="sass">


</style>