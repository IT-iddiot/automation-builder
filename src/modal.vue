<template>
    <!-- Modal -->
    <div class="modal fade" id="triggerModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="triggerModallLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="triggerModalLabel">{{ title }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="form-group text-left">
                    <label class="trigger_description">
                        Which event should trigger this automation ?
                    </label>
                    <slot name="trigger_type"></slot>
                </div> 

                <slot name="trigger_condition"></slot>
 
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
        title : String,
        target : String
    }
}

</script>

<style scoped>

.modal-dialog {
    max-width : 600px;
}

.option_wrapper {
    padding: 0.5rem 0.25rem;
}

.trigger_description {
    font-weight : 700;
}

</style>