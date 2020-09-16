<template>
<div class="d-flex">
    
    <!-- <node-showroom></node-showroom> -->

    <div class="right_panel">

        <div id="trigger_container">
            <trigger-node v-if="triggers === null" />
            <node-wrapper v-else
                :details="triggers"
                index="0"
                modalId="triggerModal"
            />

            <add-step-button />
        </div>

        <div id="step_container">
            <node-wrapper 
                v-for="(step,index) in steps"
                :key="step.id"
                :index="index + 1"
                :details="step"
                modalId="addStep"
            />
        </div>

        <trigger-modal :datas="modalData"  />

        <actions-modal />
        
    </div>

</div>
</template>

<script>
//* components
// import nodeShowroom from './node_showroom.vue';
import triggerNode from './trigger_node.vue';
import nodeWrapper from '../components/node_wrapper.vue';
import triggerModal from './modals/triggerModal.vue';
import actionsModal from './modals/actionsModal.vue';
import addStepButton from './addStepButton.vue';
//* Vuex 
import { mapState } from 'vuex';

export default {

    name: "HelloWorld",

    components : {
        // nodeShowroom,
        triggerNode,
        nodeWrapper,
        triggerModal,
        actionsModal,
        addStepButton
    },

    data() {
        return {
            
        }
    },

    computed : {
        ...mapState([
            'allForm',
            'triggers',
            'node_data',
            'allProduct',
            'modalData',
            'steps'
        ]),
    },

    methods: {

    }
};
</script>

<style lang="scss">

//* General styles 

* { 
    font-size : 14px; 
    font-family: 'Roboto', sans-serif;
}

p { margin: 0; }

.btn.focus, .btn:focus{
    box-shadow: 0 0 black !important;
}

.flex_center {
    display: flex;
    align-items: center;
    justify-content: center;
}

//* left panel element list, for references only 

.left_panel, .right_panel {
    // border: 1px solid lightgrey;
    border-radius : 10px;
}

.left_panel {
    margin: 0 2rem 0 3rem;
    width : 22vw;
}

.right_panel {
    width : 90vw;
    margin: 0 auto;
}

.option_wrapper {
    padding: 0.5rem 0.25rem 0; 
}

.trigger_description {
    font-weight : 700;
}

//* For image inside wrapper
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

.red_border {
    background: rgb(242, 36, 70);
}

.blue_border {
    background : rgb(36, 174, 242);
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

.trigger_text_wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.wrapper_container {
    margin: 40px;
}

//* For v-select
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
    display: block;
}

</style>