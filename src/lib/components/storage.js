import { writable } from 'svelte/store'
import { localStore } from './localStore.js'
const initialSession={user:'gast',auth:false,op1:false,op2:false}
const initEditor = [{"varname":"navbar","name1":"body","name2":"color","name3":"","last":"body-color","color":"#2172D2"},{"varname":"sidebar","name1":"body","name2":"color","name3":"","last":"body-color","color":"#4C8581"},{"varname":"actionbar","name1":"body","name2":"color","name3":"","last":"body-color","color":"#B53B59"}];
export const session = localStore('nwp-session', initialSession);
export const cssvar = localStore('nwp-editor', initEditor);

