<template>
    <div class="left_panel">

        <trigger-node></trigger-node>

        <node-wrapper 
            v-for="data in node_data" 
            :key="data.index"
            :details="data"
            condition="whatever"
        />

    </div>
</template>

<script>
import triggerNode from './trigger_node.vue';
import nodeWrapper from '../components/node_wrapper';
import node_data from '../js/node.js';

export default {
    name: "nodeShowroom",
    components : {
        nodeWrapper,
        triggerNode
    },
    data() {
        return {
            node_data : node_data,
        }
    }
}
</script>

<style>

</style>