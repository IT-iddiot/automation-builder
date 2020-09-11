const triggers = [
    {
        title : "Submitted a form",
        desc : "This event is fired when the person submits a form.",
        type : "submitted_form",
        which : "form",
        property : null
    },
    {
        title : "Purchased a product",
        desc : "This event is fired when the person purchased a product on your website",
        type : "purchased_product",
        which : "product",
        property : null
    },
]

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