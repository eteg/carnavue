import Vue from 'vue';
import test from 'ava';
import EtegFieldset from '../EtegFieldset.vue';

let mock;

test.beforeEach(()=>{
    
    let Fieldset = Vue.extend(EtegFieldset);

    mock = new Fieldset({
        propsData: {title: 'Titulo'}
    }).$mount();

});

test('Capitalize fieldset title.', t =>{   
    
    t.is(mock.$el.querySelector('a').text.includes('TITULO'), true);

});
