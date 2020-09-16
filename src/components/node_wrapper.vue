<template>
    <div class="wrapper_container">
        <button 
            data-toggle="modal" 
            class="btn btn_trigger_condition" 
            :class="borderOnHover"
            :data-target="`#${modalId}`"
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
        >
            <span class="btn_left_border" :class="details.class" />
            <img class="container_image" :src="details.image" >
            <span class="divider" />
            <div class="text_wrapper">
                <span>{{ details.title }}</span>
                <span>{{ condition }}</span>
            </div>

            <button v-show="isHover" @click.stop="deleteNode" class="btn delete_button">
                <span>
                    <i class="fas fa-trash-alt"></i>
                </span>
            </button>

        </button>
    </div>
</template>

<script>

export default {
    name : "nodeWrapper",
    props : {
        details : Object,
        condition : [Object, String],
        modalId : String
    },
    data() {
        return {
            isHover : false
        }
    },
    computed : {
        borderOnHover() {
            if(!this.isHover) return null;
            const node_class = this.details.type;
            if(node_class === 'trigger') {
                return 'trigger_onhover_border';
            } else if(node_class === 'condition') {
                return 'condition_onhover_border';
            } else {
                return 'actions_onhover_border';
            }
        }
    },
    methods : {
        deleteNode() {
            if(this.details.type === 'trigger') {
                this.$store.commit('deleteTrigger');
            }
        }
    }
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

.wrapper_container {
    margin: 40px;
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

</style>

<!-- <div class="wrapper_container">
    <button class="btn btn_trigger_condition">
        <span class="btn_left_border violet_border"></span>
        <img class="container_image" src="../assets/form.svg">
        <span class="divider"></span>
        <div class="text_wrapper">
            <span>Submitted a form</span>
            <span>Any form</span>
        </div>
    </button>
</div>

<div class="wrapper_container">
    <button class="btn btn_trigger_condition">
        <span class="btn_left_border violet_border"></span>
        <img class="container_image" src="../assets/purchase.svg">
        <span class="divider"></span>
        <div class="text_wrapper">
            <span>Purchased a product</span>
            <span>Any product</span>
        </div>
    </button>
</div>

<div class="wrapper_container">
    <button class="btn btn_trigger_condition">
        <span class="btn_left_border red_background"></span>
        <img class="container_image" src="../assets/delay.svg">
        <span class="divider"></span>
        <div class="text_wrapper">
            <span>Delay</span>
            <span>For 1 minute</span>
        </div>
    </button>
</div>

<div class="wrapper_container">
    <button class="btn btn_trigger_condition">
        <span class="btn_left_border blue_background"></span>
        <img class="container_image" src="../assets/email.svg">
        <span class="divider"></span>
        <div class="text_wrapper">
            <span>Send an email</span>
            <span>campaign : helloworld</span>
        </div>
    </button>
</div>

<div class="wrapper_container">
    <button class="btn btn_trigger_condition">
        <span class="btn_left_border blue_background"></span>
        <img class="container_image" src="../assets/tag.svg">
        <span class="divider"></span>
        <div class="text_wrapper">
            <span>Add tag</span>
            <span>tag : newcomers</span>
        </div>
    </button>
</div>

<div class="wrapper_container">
    <button class="btn btn_trigger_condition">
        <span class="btn_left_border blue_background"></span>
        <img class="container_image" src="../assets/tag.svg">
        <span class="divider"></span>
        <div class="text_wrapper">
            <span>Remove tag</span>
            <span>tag : newcommers</span>
        </div>
    </button>
</div> -->