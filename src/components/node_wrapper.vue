<template>
    <div class="wrapper_container">
        <button class="btn btn_trigger_condition">
            <span class="btn_left_border" :class="details.class"></span>
            <img class="container_image" :src="details.image" >
            <span class="divider"></span>
            <div class="text_wrapper">
                <span>{{ details.title }}</span>
                <span>{{ condition }}</span>
            </div>
        </button>
    </div>
</template>

<script>

export default {
    name : "nodeWrapper",
    props : {
        details : Object,
        condition : [Object, String]
    },
}
</script>

<style scoped lang="scss">

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

.flex_center, .trigger_text_wrapper {
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