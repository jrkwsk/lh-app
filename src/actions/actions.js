export const DONE_FILTER = 'DONE_FILTER'
export const INPROGRESS_FILTER = 'INPROGRESS_FILTER'
export const NEW_FILTER = 'NEW_FILTER'
export const REVIEW_FILTER = 'REVIEW_FILTER'


const doneFilter = status => ({
    type: DONE_FILTER,
    payload: {status}
});
const inprogressFilter = status => ({
    type: INPROGRESS_FILTER,
    payload: {status}
});

const inProgressFilter = ({}) => ({})
const newFilter = ({}) => ({})
const reviewFilter = ({}) => ({})