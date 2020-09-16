<template>

    <bs-modal :title="modalTitle" modalId="addStep">
        <template #body>

            <div v-show="!selected" class="row" style="justify-content: space-evenly">
                <div @click="selected = 'Delay'" class="flex_center step-wrapper col-md-5">
                    <img src="@/assets/delay.svg" width="40px" height="40px" alt="Delay"  />
                    <h1>Delay</h1>
                    <span>Wait for a given period of time before continuing down the path.</span>
                </div>
                <div @click="selected = 'Actions'" class="flex_center step-wrapper col-md-5">
                    <img src="@/assets/action.svg" width="42px" height="42px" alt="Actions" />
                    <h1>Action</h1>
                    <span>Perform an action, such as add tag or send an one-off email.</span>
                </div>
            </div>

            <div v-show="selected === 'Delay'">
                <div class="form-group text-left m-0">
                    <label class="trigger_description">
                        Wait for ...
                    </label>
                    <div class="input-wrapper">
                        <input v-model.number="delay.duration" type="number" class="form-control">
                        <select v-model="delay.unit" class="custom-select">
                            <option value="minute">minute(s)</option>
                            <option value="hour">hour(s)</option>
                            <option value="day">day(s)</option>
                        </select>
                    </div>
                    <p v-show="delay.duration <= 0" class="text-danger my-2">
                        Duration must be greater than 1 
                    </p>
                </div>
            </div>

            <div v-show="selected === 'Actions'">
                <div class="form-group text-left">
                    <label class="trigger_description">
                        What action should we perform?
                    </label>
                    <v-select v-model="selectedAction" label="title" :options="actionOptions">
                        <template v-slot:option="option">
                            <div class="option_wrapper">
                                <strong>{{ option.title }}</strong>
                                <p class="mt-1">{{ option.view.desc }}</p>
                            </div>
                        </template>
                    </v-select>
                </div> 

                <div class="form-group text-left" v-if="selectedAction !== null">
                    <label class="trigger_description">
                        Which {{ selectedAction.view.which }} ?
                    </label>
                    <v-select v-model="selectedAction.properties" label="name" :options="actionProperties">
                        <template v-slot:option="option">
                            <div class="option_wrapper py-2">
                                <strong>{{ option.name }}</strong>
                            </div>
                        </template>
                    </v-select>
                </div>

            </div>

        </template>

        <template #button_action>
            <button @click="clearModalData" type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
            </button>
            <button @click="saveActions" type="button" class="btn btn-primary">
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
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {

    name : "actionsModal",

    components : {
        bsModal,
        vSelect
    },

    data() {
        return {
            selected : null,
            delay : { duration: 1, unit : 'minute' },
            selectedAction : null,
        }
    },

    computed : {

        ...mapState([
            'modalData',
            'actionOptions',
            'allTags',
            'allEmails'
        ]),

        ...mapGetters([
            'nodeStyles'
        ]),

        modalTitle() {
            return this.selected ? `Edit ${this.selected}` : 'Add A New Step';
        },

        delaySettings() {
            const { duration, unit } = this.delay;
            const { border, image } = this.nodeStyles('delay');
            return {
                type : 'delay',
                title : "Delay",
                properties : {
                    ...this.delay,
                    delayTimeInSeconds : this.totalDelay(duration, unit)
                },
                view : { border, image },
                description : `for ${duration} ${unit}${duration > 1 ? 's' : ''}`
            }
        },

        actionProperties() {
            if(this.selectedAction === null) return [];
            return this.selectedAction.action_type === 'send_email'
                ? this.allEmails
                : this.allTags; 
        }
    },

    methods : {

        ...mapMutations([
            'saveDelay',
            'saveAction',
            'setModalData',
            'updateStep',
        ]),

        totalDelay(duration, unit) {
            //* I worry put this in computed will affect performance (maybe I think too much LOL 😂)
            const unitValue = unit === 'minute' ? 60 : (unit === 'hour' ? 3600 : 86400);
            return duration * unitValue;
        },

        saveActions() {
            if(this.selected === 'Delay') {
                this.modalData === null 
                    ? this.saveDelay(this.delaySettings) 
                    : this.updateStep(this.delaySettings);
            } else {
                this.modalData === null 
                    ? this.saveAction(this.selectedAction)
                    : this.updateStep(this.selectedAction);
            }
            this.resetDataProperty();
        },

        clearModalData() {
            this.resetDataProperty();
        },

        resetDataProperty() {
            Object.assign(this.$data, this.$options.data());
            $("#addStep").modal('hide');
        }
    },

    watch : {
        modalData(newValue) {
            if(!newValue) {
                this.resetDataProperty();
                return;
            }
            if(newValue.type === 'delay') {
                const {duration, unit} = newValue.properties;
                this.selected = 'Delay';
                this.delay = { duration, unit };
            } else {
                this.selected = "Actions";
                this.selectedAction = newValue;
            }
        }
    }

}
</script>

<style lang="scss" scoped>

.step-wrapper {
    height: 180px;
    flex-direction: column;
    box-shadow: 0px 4px 15px 4px rgba(69, 65, 78, 0.06);

    &:hover {
        cursor: pointer;
    }
}

h1 {
    font-size: 19px;
    font-weight: 700;
    margin: 10px 0 5px 0;
}

.input-wrapper {
    display: flex;

    input{
        flex-basis : 25%;
        margin-right : 1.5rem;
    }

    select {
        flex-basis : 20%;
    }
}

</style>