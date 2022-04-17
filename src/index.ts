// import { cloneDeep } from 'lodash'; //70kb
// import cloneDeep from 'lodash/cloneDeep'; //17kb
import { cloneDeep } from 'lodash-es'; //13kb

const obj = { name: 'amli' };
console.log(cloneDeep(obj));
