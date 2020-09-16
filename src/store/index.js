import Vue from "vue";
import Vuex from 'vuex';
//* external js file 
import node_data from '../js/node.js';
import { triggers, forms, products } from '../js/triggers.js';

Vue.use(Vuex);

export default new Vuex.Store({

    state : {
        allForm : forms, //* for testing purpose only 
        allProduct : products, //* for testing purpose only 
        triggerOptions : triggers,
        node_data : node_data,
        actionOptions : [
            'Send an email',
            'Add tag',
            'Remove tag'
        ],
        triggers : null,
        steps : []
    },

    getters : {

    },

    mutations: {
        saveTriggers(state, payload) {
            //* Temporarily support for 1 trigger only 
            state.triggers = payload;
        },

        deleteTrigger(state) {
            state.triggers = null;
        },
        
        saveDelay(state, payload){
            state.steps.push(payload);
        }
    },

    actions: {

    }
});