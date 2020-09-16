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
        name : "Form 1"
    },
    {
        id : 2,
        name : "Form 2"
    }
]

const products = [
    {
        id : 'any',
        name : 'Any Product'
    },
    {
        id : 20,
        name : 'Anker Soundcore Pro'
    },
    {
        id : 30,
        name : 'Awesome backpack'
    },
]

export { triggers, forms, products };