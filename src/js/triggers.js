const triggers = [
    {
        title : "Submitted a form", //* cannot use nested object value as label in v-select, so have to move out LOL
        trigger_type : "submitted_form",
        properties : {},
        view : {
            which : "form",   
            desc : "This event is fired when the person submits a form.",
        }
    },
    {
        title : "Purchased a product", 
        trigger_type : "purchased_product",
        properties : {},
        view : {
            which : "product",
            desc : "This event is fired when the person purchased a product on your website",
        }
    },
]

/*
 * forms & products is for testing purpose only
   TODO : remove them after done testing   
 */
const forms = [
    {
        id : 'any',
        name : "Any Form"
    },
    {
        id : 1,
        name : "Newsletter form"
    },
    {
        id : 2,
        name : "Signup form"
    },
    {
        id : 3,
        name : "Feedback form"
    },
    {
        id : 4,
        name : "Contact form"
    },
]

const products = [
    {
        id : 'any',
        name : 'Any Product'
    },
    {
        id : 20,
        name : 'Orange iPhone 12 pro max'
    },
    {
        id : 30,
        name : 'Tesla Model S'
    },
    {
        id : 40,
        name : 'SpaceX Falcon 9'
    },
    {
        id : 50,
        name : 'Senheiser momentum true wireless 2'
    },
]

export { triggers, forms, products };