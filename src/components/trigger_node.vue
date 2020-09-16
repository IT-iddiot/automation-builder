<template>
    <div class="wrapper_container">
        <div @click="triggerModal" data-toggle="modal" data-target="#triggerModal" class="trigger_wrapper trigger_text_wrapper">
            <p class="add_trigger_text">
                <img class="trigger_plus_icon" src="@/assets/plus.svg">
                Add an entry point
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "triggerNode",

    methods : {
        triggerModal() {
            this.$store.commit('setModalData');
        }
    }
}
</script>

<style>

</style>