import { reactive } from 'vue';

const store = reactive({
    apiCall: '',
    searchQuery: '',
    searchedQuery: '',
    noResults: false
})

export { store }