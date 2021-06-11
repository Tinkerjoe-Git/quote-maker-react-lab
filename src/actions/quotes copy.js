// TODO: Create action creators as defined in tests
export const addQuote = (quote={}) => {
    return { 
        type: 'ADD_QUOTE', 
        quote:  quote
    };
};

export const removeQuote = (quoteId= null) => {
    return { 
        type: 'REMOVE_QUOTE', 
        quoteId: quoteId
    };
};

export const upvoteQuote = (quoteId= null) => {
    return { 
        type: 'UPVOTE_QUOTE', 
        quoteId: quoteId
    };
};

export const downvoteQuote = (quoteId= null) => {
    return { 
        type: 'DOWNVOTE_QUOTE', 
        quoteId: quoteId
    };
};