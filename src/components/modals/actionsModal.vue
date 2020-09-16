<template>

    <bs-modal :title="modalTitle" modalId="addStep">
        <template #body>

            <!-- <div v-show="!selected" class="row" style="justify-content: space-evenly">
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
            </div> -->

            <div v-show="selected === 'Delay'">
                <div class="form-group text-left m-0">
                    <label class="trigger_description">
                        Wait for ...
                    </label>
                    <div class="input-wrapper">
                        <input v-model="delay.duration" type="number" class="form-control">
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

            </div>

        </template>

        <template #button_action>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
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
// import vSelect from 'vue-select';
//* components 
import bsModal from "./modal";
import { mapMutations } from 'vuex';


export default {

    name : "actionsModal",

    components : {
        bsModal,
        // vSelect
    },

    data() {
        return {
            selected : 'Delay',
            delay : { duration: 1, unit : 'minute' }
        }
    },

    computed : {
        modalTitle() {
            return this.selected ? `Edit ${this.selected}` : 'Add A New Step';
        },
    },

    methods : {

        ...mapMutations([
            'saveDelay'
        ]),

        totalDelay(duration, unit) {
            const unitValue = unit === 'minute' ? 60 : (unit === 'hour' ? 3600 : 86400);
            return duration * unitValue;
        },

        saveActions() {
            const {duration, unit} = this.delay;
            if(this.selected === 'Delay') {
                this.saveDelay({
                    type : 'delay',
                    properties : {
                        delayTimeInSeconds : this.totalDelay(duration, unit)
                    },
                    description : `for ${duration} ${unit}${duration > 1 ? 's' : ''}`
                })
                $("#addStep").modal('hide');
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