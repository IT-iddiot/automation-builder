const actions = [
    {
        title : "Send an email", 
        action_type : "send_email",
        properties : {},
        view : {
            which : "email",   
            desc : "Send a special email to the selected person.",
        }
    },
    {
        title : "Add tag", 
        action_type : "add_tag",
        properties : {},
        view : {
            which : "tag",   
            desc : "Add a given tag to the selected person.",
        }
    },
    {
        title : "Remove tag",
        action_type : "remove_tag",
        properties : {},
        view : {
            which : "tag",   
            desc : "Remove a given tag from the selected person.",
        }
    },
]

/*
 * emails & tags is for testing purpose only
   TODO : remove them after done testing   
 */
const emails = [
    {
        id : 101,
        name : "Winter is comming"
    },
    {
        id : 201,
        name : "Wakanda forever "
    },
    {
        id : 301,
        name : "MCO again ?"
    },
    {
        id : 401,
        name : "You may interested in this product ✨"
    },
    {
        id : 501,
        name : "Thank you for your purchase 😘"
    },
]

const tags = [
    {
        id : 10,
        name : "VIP"
    },
    {
        id : 20,
        name : "sleepy ..."
    },
    {
        id : 30,
        name : "valuable customers"
    },
    {
        id : 40,
        name : "subscribers"
    },
    {
        id : 50,
        name : "blacklisted"
    },
]

export {actions, emails, tags};