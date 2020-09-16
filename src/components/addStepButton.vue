<template>
    <div>
        <button @click="triggerModal" id="add_actions_button" class="btn btn-secondary" data-toggle="modal" data-target="#addStep">
            <i class="fas fa-plus flex_center"></i>
        </button>    
    </div>
</template>

<script>
export default {
    name : "addNodeButton",
    methods : {
        triggerModal() {
            this.$store.commit('setModalData');
        }
    }
}
</script>

<style lang="scss" scoped>

#add_actions_button {
    width : 16px;
    height : 16px;
    padding : 0;
    border-radius : 50%;
}

#add_actions_button i {
    font-size : 9px;
}

</style>