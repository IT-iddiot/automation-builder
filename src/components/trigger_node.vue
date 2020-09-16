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

<style scoped lang="scss">

    .connection_line {
        position: absolute;
        height: 50px;
        border-left : 1px solid rgba(85, 85, 85, 0.8);
        background: rgba(85, 85, 85, 0.8);
        z-index : -1;
    }

    .trigger_wrapper {

        position: relative;

        &::after {
            @extend .connection_line;
            content : '';
            top: 100%;
            left: 50%;
        }
    }

</style>