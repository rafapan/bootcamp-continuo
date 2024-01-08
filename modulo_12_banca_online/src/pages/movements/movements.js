import { getAccount } from '../account/account.api';
import { onSetValues } from '../../common/helpers';

import { addMovementRows } from './movements.helpers';
import { getMovements } from './movements.api';
import { mapMovementsListFromApiToViewModel } from './movements.mappers';
import { history } from '../../core/router';
import { mapAccountFromApiToViewModel } from '../account/account.mappers';

let account = {
  id: '',
  type: '',
  alias: '',
};

const params = history.getParams();
const getParamsAccount = Boolean(params.id);

if (getParamsAccount) {
  getAccount(params.id).then((apiAccount) => {
    account = mapAccountFromApiToViewModel(apiAccount);
    onSetValues(account);
  });
}

getMovements().then((movements) => {
  addMovementRows(movements);
});

// getAccountList().then((accountList) => {
//   const viewModelAccountList = mapAccountListFromApiToViewModel(accountList);
//     addAccountRows(viewModelAccountList);

//     viewModelAccountList.forEach(account => {
//       onUpdateField(`select-${account.id}`, (event) => {
//           const route = event.target.value;
//           history.push(route);
//       })
//     })
//   });
