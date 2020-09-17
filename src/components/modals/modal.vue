<template>

    <div class="modal fade" :id="modalId" data-backdrop="static" tabindex="-1" role="dialog" :aria-labelledby="`${modalId}Label`" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="`${modalId}Label`">
                        {{ title }}
                    </h5>
                    <button @click="resetModalData" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" :class="{step_wrapper : isAddStep}">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="button_action"></slot>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name : "bsModal",

    props: {
        modalId : String,
        title : String,
        target : String,
        datas : Object
    },

    computed : {
        isAddStep() {
            return this.modalId === 'addStep';
        }
    },

    methods : {
        resetModalData() {
            this.$store.commit('setModalData')
        }
    }
}

</script>

<style lang="scss" scoped>

.step_wrapper {
    padding: 1rem;
}

.modal-dialog {
    max-width : 600px;
}

.option_wrapper {
    padding: 0.5rem 0.25rem;
}

.trigger_description {
    font-weight : 700;
}

.modal.modal-static .modal-dialog { 
    -webkit-transform: none !important;
    transform: none !important; 
}

</style>