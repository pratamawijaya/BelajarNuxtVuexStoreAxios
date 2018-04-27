import axios from 'axios';

export default function( {params, store} ) {

    return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
    .then( (response) => {
        console.log(`https://itunes.apple.com/search?term=${params.id}&entity=album`);
        console.log(response.data.results);
        store.commit('add', response.data.results);
    })

}