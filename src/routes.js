/* eslint-disable */

import {wrap} from 'svelte-spa-router/wrap'
import {Start, Icons, Cssvars, NotFound } from './pages/';

export default {
    '/': Start,
    '/icons': Icons,
    '/css': Cssvars,
    '*': NotFound,
}
