<template>
  
    <bs-modal title="Add Trigger" modalId="triggerModal">

        <template #body>

            <div class="form-group text-left">
                <label class="trigger_description">
                    Which event should trigger this automation ?
                </label>
                <v-select v-model="selectedValue" label="title" :options="triggerOptions">
                    <template v-slot:option="option">
                        <div class="option_wrapper">
                            <strong>{{ option.title }}</strong>
                            <p class="mt-1">{{ option.view.desc }}</p>
                        </div>
                    </template>
                </v-select>
            </div> 

            <div class="form-group text-left" v-if="selectedValue !== null">
                <label class="trigger_description">
                    Which {{ selectedValue.view.which }} ?
                </label>
                <v-select v-model="selectedValue.properties" label="name" :options="trigger_property">
                    <template v-slot:option="option">
                        <div class="option_wrapper py-2">
                            <strong>{{ option.name }}</strong>
                        </div>
                    </template>
                </v-select>
            </div>

        </template>

        <template #button_action>
            <button @click="clearSelectedTrigger" type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
            </button>
            <button @click="saveTrigger" type="button" class="btn btn-primary">
                Save
            </button>
        </template>

    </bs-modal>

</template>

<script>
//* plugins (super 麻煩 to use $ in vue cli)
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;
import vSelect from 'vue-select';
//* components 
import bsModal from "./modal";
//* Vuex 
import { mapState } from 'vuex';

export default {

    name : "triggerModal",

    components : {
        bsModal,
        vSelect
    },

    data() {
        return {
            selectedValue : null,
        }
    },

    computed : {
        ...mapState([
            'allForm',
            'allProduct',
            'modalData',
            'triggerOptions',
        ]),

        trigger_property() {
            if(this.selectedValue === null) return [];
            return this.selectedValue.trigger_type === 'submitted_form'
                ? this.allForm
                : this.allProduct; 
        },
    },

    methods : {
        clearSelectedTrigger() {
            // this.selectedValue = null;
        },

        saveTrigger() {
            this.$store.commit('saveTriggers', 
            {
                type : "trigger",
                segment_description : "everyone",
                ...this.selectedValue
            });
            this.selectedValue = null;
            $("#triggerModal").modal('hide');
        },
    },

    watch : {
        modalData(newValue) {
            this.selectedValue = newValue;
        }
    }

}
</script>

<style lang="scss" scoped>

</style>