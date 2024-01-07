import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToViewModel } from "./account-list-mappers";
import { onUpdateField } from "../../common/helpers";
import { history } from "../../core/router";

// Account
//     {
//       id: string
//       iban: string
//       name: string
//       balance: number -> y lo queremos pasar a string y añadirle €
//       lastTransaction: string -> dd/mm/aa
//     

// mapper - mapeador modificar una entiendad que nos viene del servidor y queremos modificarla para lo que mostramos al cliente}
// onUpdateField('', () => {
    
// })

getAccountList().then((accountList) => {
const viewModelAccountList = mapAccountListFromApiToViewModel(accountList);
  addAccountRows(viewModelAccountList);

  viewModelAccountList.forEach(account => {
    onUpdateField(`select-${account.id}`, (event) => {
        const route = event.target.value;
        history.push(route);
    })
  })
});
