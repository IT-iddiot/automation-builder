<template>
<div class="d-flex">
    
    <node-showroom></node-showroom>

    <div class="right_panel border">
        <trigger-node v-if="triggers.length === 0"></trigger-node>
        <node-wrapper 
            v-else
            :details="node_data[triggers.trigger_type]"
            condition="whatever"
        />
        <!-- <pre class="text-left p-3">{{ triggers }}</pre> -->
    </div>

    <bs-modal title="Add Triggers">

        <template #trigger_type>
            <v-select v-model="selectedValue" label="title" :options="triggerOptions">
                <template v-slot:option="option">
                    <div class="option_wrapper">
                        <strong>{{ option.title }}</strong>
                        <p class="mt-1">{{option.desc}}</p>
                    </div>
                </template>
            </v-select>
        </template>

        <template #trigger_condition>
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
            <button @click="clearSelectedTrigger" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="saveTrigger" type="button" class="btn btn-primary">Save</button>
        </template>

    </bs-modal>

</div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

import bsModal from "../modal.vue";
//* components and plugins 
import vSelect from 'vue-select';
import nodeShowroom from './node_showroom.vue';
import triggerNode from './trigger_node.vue';
import nodeWrapper from '../components/node_wrapper';
//* external js file 
import node_data from '../js/node.js';
import { triggers, forms, products } from '../js/triggers.js';

export default {
    name: "HelloWorld",

    components : {
        bsModal,
        vSelect,
        nodeShowroom,
        triggerNode,
        nodeWrapper
    },

    data() {
        return {
            selectedValue : null,
            triggerOptions : triggers,
            allForm : forms,
            allProduct : products,
            triggers : [],
            node_data : node_data,
            actionOptions : [
                'Send an email',
                'Add tag',
                'Remove tag'
            ],
        }
    },

    computed : {

        trigger_property() {
            if(this.selectedValue === null) return [];
            return this.selectedValue.type === 'submitted_form'
                ? this.allForm
                : this.allProduct; 
        },

    },

    methods: {

        saveTrigger() {
            const item = this.selectedValue;
            const trigger_details = {
                type : "trigger",
                segment_description : "everyone",
                trigger_type : item.type,
                properties : {
                    id : item.property.id
                },
            }   
            this.triggers = trigger_details; //* Temporarily support for 1 trigger only 
            $("#triggerModal").modal('hide');
        },

        clearSelectedTrigger() {
            this.selectedValue = null;
        },

    }
};
</script>

<style lang="scss">

.vs__dropdown-toggle {
    height: 40px;
}

.vs__actions {
    padding: 6px 13px 0 3px;
}

.vs__clear {
    display: none;
}

.v-select .dropdown-menu {
  display:block;
}

</style>

<style lang="scss">

* {
    font-size : 14px;
}

//* left panel element list, for references only 
.left_panel, .right_panel {
    border: 1px solid lightgrey;
    border-radius : 10px;
}

.left_panel {
    margin: 0 2rem 0 3rem;
    width : 22vw;
}

.right_panel {
    width : 72vw;
    margin: 0 auto;
}

.option_wrapper {
    padding: 0.5rem 0.25rem;
}

.trigger_description {
    font-weight : 700;
}

/* for image inside wrapper */
.container_image {
    width: 30px;
    height: 30px;
}

.trigger_plus_icon {
    width: 16px;
    height: 16px;
    margin-right: 0.3rem;
}

.divider {
    margin: 0 12px;
    height: 48px;
    border-left: 1px solid rgba(36,28,21,.15);
}

.btn_trigger_condition {
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 68px;
    padding: 0 16px;
    margin: 0;
    line-height: 20px;
    border: 1px solid #dbd9d2;
    border-left-color: transparent;
    background: #fff;
    cursor: pointer;
    width: 100%;
    max-width: 340px;
    user-select: none;
}

.btn_left_border {
    position: absolute;
    left: 0;
    width: 4px;
    height: 68px;
}

.violet_border {
    background: #734bbd;
}

.red_background {
    background: rgb(242, 36, 70);
}

.blue_background {
    background : rgb(36, 174, 242);
}

p {
    margin: 0;
}

.add_trigger_text {
    width: 100%;
    font-size: 14px;
    margin: 0;
}

.trigger_wrapper {
    height : 48px;
    width: 200px;
    border-width: 1px;
    border-style: dashed;
    border-color: grey;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 0 auto;
}

.trigger_wrapper:hover {
    cursor: pointer;
}

.widget_icon {
    width: 24px;
    height: 24px;
    fill: rgba(36,28,21,0.65);
}

.text_wrapper {
    display: flex;
    flex-direction: column;
    font-size: 14px;
}

.text_wrapper > span {
    text-align: left;
}

.text_wrapper span:first-child {
    font-weight: 700;
}

.text_wrapper span:last-child {
    color:rgba(36,28,21,.65);
}

.flex_center, .trigger_text_wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.wrapper_container {
    margin: 40px;
}

</style>