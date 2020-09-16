export default {

    submitted_form : {
        'type' : 'trigger',
        "class" : "violet_border", 
        "image" : require('../assets/form.svg'),
        "title" : "Submitted a form",
    },
    
    purchased_product : {
        'type' : 'trigger',
        "class" : "violet_border", 
        "image" : require('../assets/purchase.svg'),
        "title" : "Purchased a product"
    },

    delay : {
        'type' : 'condition',
        "class" : "red_border", 
        "image" : require('../assets/delay.svg'),
        "title" : "Delay"
    },

    send_email : {
        'type' : 'action',
        "class" : "blue_border", 
        "image" : require('../assets/email.svg'),
        "title" : "Send an email"
    },

    add_tag : {
        'type' : 'action',
        "class" : "blue_border", 
        "image" : require('../assets/tag.svg'),
        "title" : "Add tag"
    },

    remove_tag : {
        'type' : 'action',
        "class" : "blue_border", 
        "image" : require('../assets/tag.svg'),
        "title" : "Remove tag"
    }
}