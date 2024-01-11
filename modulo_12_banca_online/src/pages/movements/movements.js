import { getAccount } from '../account/account.api';
import { onSetValues } from '../../common/helpers';

import { addMovementRows } from './movements.helpers';
import { getMovements } from './movements.api';
import { mapMovementsListFromApiToViewModel } from './movements.mappers';
import { mapAccountFromApiToViewModel } from '../account/account.mappers'
import { history } from '../../core/router';

// let account = {
//   id: '',
//   type: '',
//   alias: '',
// };

const params = history.getParams();
const isEditMode = Boolean(params.id);

if (isEditMode) {
  getAccount(params.id).then((apiAccount) => {
    const account = mapAccountFromApiToViewModel(apiAccount);
    onSetValues(account);
    console.log(params.id)
  });
  getMovements().then((movements) => {
    const viewModelMovements = mapMovementsListFromApiToViewModel(movements, params.id);
    const myMovements = (event) =>
      event.filter((element) => element !== undefined);
    addMovementRows(myMovements(viewModelMovements));
  });
} else {
  getMovements().then((movements) => {
    addMovementRows(movements);
  });
}

