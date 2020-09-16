export default {

    submitted_form : {
        'type' : 'trigger',
        "border" : "violet_border", 
        "image" : require('../assets/form.svg'),
        "title" : "Submitted a form",
    },
    
    purchased_product : {
        'type' : 'trigger',
        "border" : "violet_border", 
        "image" : require('../assets/purchase.svg'),
        "title" : "Purchased a product"
    },

    delay : {
        'type' : 'delay',
        "border" : "red_border", 
        "image" : require('../assets/delay.svg'),
        "title" : "Delay"
    },

    send_email : {
        'type' : 'action',
        "border" : "blue_border", 
        "image" : require('../assets/email.svg'),
        "title" : "Send an email"
    },

    add_tag : {
        'type' : 'action',
        "border" : "blue_border", 
        "image" : require('../assets/tag.svg'),
        "title" : "Add tag"
    },

    remove_tag : {
        'type' : 'action',
        "border" : "blue_border", 
        "image" : require('../assets/tag.svg'),
        "title" : "Remove tag"
    }
}