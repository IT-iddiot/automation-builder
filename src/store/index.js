import Vue from "vue";
import Vuex from 'vuex';
//* external js file 
import node_data from '../js/node.js';
import { triggers, forms, products } from '../js/triggers.js';
import { actions, emails, tags} from '../js/actions.js';

Vue.use(Vuex);

export default new Vuex.Store({

    state : {
        count : 0, //* temporarily use simple incremental number for id
        steps : [],
        triggers : null,
        modalData : null,
        node_data : node_data,
        actionOptions : actions,
        triggerOptions : triggers,
        //* Dummy data, for testing only 
        allTags : tags,
        allForm : forms, 
        allEmails : emails,
        allProduct : products, 
        //* End::dummy data
    },

    getters : {
        nodeStyles : (state) => (key) => {
            return state.node_data[key];
        }
    },

    mutations: {

        setModalData(state, payload = null) {
            state.modalData = payload;
        },

        saveTriggers(state, payload) {
            //* Temporarily support for 1 trigger only 
            //* Temporarily add & update will share same mutation
            const {border ,image} = state.node_data[payload.trigger_type];
            payload.view = {
                border,
                image,
                ...payload.view
            }      
            payload.id = state.count += 1; 
            state.triggers = payload;
        },

        saveDelay(state, payload){
            const {border ,image} = state.node_data.delay;
            payload.view = {
                border,
                image,
                ...payload.view
            }
            payload.id = state.count+=1;
            state.steps.push(payload);
        },

        saveAction(state, payload) {
            /**
             * * to remove the observable / reactiveness between new & old value
             * * can use JSON.stringify(JSON.parse(payload)) / _.clone(payload) / _.cloneDeep(payload)
             */
            let settings = {...payload}; 
            const {border ,image} = state.node_data[settings.action_type];
            settings.view = {
                border,
                image,
                ...settings.view
            }
            settings.id = state.count+=1;
            state.steps.push(settings)
        },

        updateStep(state, payload) {
            const index = state.steps.findIndex(e => e.id === state.modalData.id);
            Vue.set(state.steps, index, payload);
        },

        deleteTrigger(state) {
            state.triggers = null;
        },

        deleteStep(state, step_id) {
            const index = state.steps.findIndex(e => e.id === step_id);
            state.steps.splice(index, 1);
        },
        
    },

    actions: {

    }

});