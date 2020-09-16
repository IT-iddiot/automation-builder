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
                            <p class="mt-1">{{option.desc}}</p>
                        </div>
                    </template>
                </v-select>
            </div> 

            <div class="form-group text-left" v-if="selectedValue !== null">
                <label class="trigger_description">
                    Which {{ selectedValue.which }} ?
                </label>
                <v-select v-model="selectedValue.property" label="name" :options="trigger_property">
                    <template v-slot:option="option">
                        <div class="option_wrapper">
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
//* plugins 
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
            'triggerOptions',
        ]),

        trigger_property() {
            if(this.selectedValue === null) return [];
            return this.selectedValue.type === 'submitted_form'
                ? this.allForm
                : this.allProduct; 
        },
    },

    methods : {
        clearSelectedTrigger() {
            // this.selectedValue = null;
        },

        saveTrigger() {
            const item = this.selectedValue;
            this.$store.commit('saveTriggers', 
            {
                type : "trigger",
                segment_description : "everyone",
                trigger_type : item.type,
                properties : {
                    id : item.property.id
                }
            });
            $("#triggerModal").modal('hide');
        },
    }

}
</script>

<style lang="scss" scoped>

</style>