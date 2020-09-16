<template>
    <div>
        <button @click="triggerModal" id="add_actions_button" class="btn btn-secondary" data-toggle="modal" data-target="#addStep">
            <i class="fas fa-plus flex_center"></i>
        </button>    
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name : "addNodeButton",
    props : {
        index : {
            type : Number,
            default : 0
        }
    },
    methods : {

        ...mapMutations([
            'setIndex',
            'setModalData'
        ]),

        triggerModal() {
            this.setIndex(this.index);
            this.setModalData();
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