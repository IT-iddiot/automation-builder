<template>
    <div>
        <div class="wrapper_container">
            <button 
                data-toggle="modal" 
                class="btn btn_trigger_condition" 
                :class="borderOnHover"
                :data-target="`#${modalId}`"
                @click="triggerModal"
                @mouseover="isHover = true"
                @mouseleave="isHover = false"
            >
                <span v-if="index !== '0'" class="top_connection_line" />
                <span class="btn_left_border" :class="details.view.border" />
                <img class="container_image" :src="details.view.image" />
                <span class="divider" />

                <div class="text_wrapper">
                    <span>{{ details.title }}</span>
                    <span v-if="details.type === 'delay'">{{ details.description}}</span>
                    <span v-else>{{ details.properties.name }}</span>
                </div>

                <button v-show="isHover" @click.stop="deleteNode" class="btn delete_button">
                    <span>
                        <i class="fas fa-trash-alt"></i>
                    </span>
                </button>

            </button>
        </div>

        <add-step-button v-if="details.type !== 'trigger'" :index="index" />
    </div>
</template>

<script>
import addStepButton from './addStepButton.vue';
import { mapMutations, mapState } from 'vuex';

export default {
    name : "nodeWrapper",
    props : {
        details : Object,
        modalId : String,
        index : [String, Number],

    },
    data() {
        return {
            isHover : false
        }
    },

    components : {
        addStepButton
    },

    computed : {

        ...mapState([
            'node_data'
        ]),

        borderOnHover() {
            if(!this.isHover) return null;
            const node_class = this.details.type;
            if(node_class === 'trigger') {
                return 'trigger_onhover_border';
            } else if(node_class === 'delay') {
                return 'condition_onhover_border';
            } else {
                return 'actions_onhover_border';
            }
        }
    },
    methods : {

        ...mapMutations([
            'deleteTrigger',
            'setModalData',
            'deleteStep'
        ]),

        deleteNode() {
            if(this.details.type === 'trigger') {
                this.deleteTrigger();
            } else {
                //* delete delay & action share same commit
                this.deleteStep(this.details.id);
            } 
        },

        triggerModal() {
            this.setModalData(this.details);
        }
    },

}
</script>

<style scoped lang="scss">

.delete_button {
    position: absolute;
    right: -10%;

    &:hover {
        color: red;
    }
}

.violet_border {
    background: #734bbd;
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

    &:hover {
        border-width: 1px;
        border-style: solid;
        border-left-color: transparent;
        box-shadow: 0 4px 12px rgba(36,28,21,.12);
    }
}

.btn_left_border {
    position: absolute;
    left: 0;
    width: 4px;
    height: 68px;
}

.trigger_onhover_border {
    border-color: #734bbd;
}

.condition_onhover_border {
    border-color : rgb(242, 36, 70);
}

.actions_onhover_border {
    border-color : rgb(36, 174, 242);
}

/* for image inside wrapper */
.container_image {
    width: 30px;
    height: 30px;
}

.divider {
    margin: 0 12px;
    height: 48px;
    border-left: 1px solid rgba(36,28,21,.15);
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

.connection_line {
    position: absolute;
    height: 50px;
    border-left : 1px solid rgba(85, 85, 85, 0.8);
    background: rgba(85, 85, 85, 0.8);
    z-index : -1;
}

.top_connection_line {
    @extend .connection_line;
    content : '';
    bottom: 100%;
    left: 50%;
}

.btn_trigger_condition {

    &::after {
        @extend .connection_line;
        content : '';
        top: 100%;
        left: 50%;
    }
}

</style>