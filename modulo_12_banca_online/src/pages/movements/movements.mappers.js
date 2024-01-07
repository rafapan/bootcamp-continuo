// mapper - mapeador modificar una entiendad que nos viene del servidor y queremos modificarla para lo que mostramos al cliente}

// Lo que nos viene de servidor es un array. Necesitamos un metodo que mapee realmente un accountList de la api al viewmodel
// export const mapAccountListApiToViewModel = (accountList) =>
//   Array.isArray(accountList)
//     ? accountList.map((account) => mapAccountListApiToViewModel(account))
//     : [];

export const mapMovementsListFromApiToViewModel = (movements, accountId) =>
  Array.isArray(movements)
    ? movements.map((moves) => {
        if (moves.accountId == accountId) {
          return mapMovementsFromApiToViewModel(moves);
        }
      })
    : [];


const mapMovementsFromApiToViewModel = (movements) => {
  return {
    ...movements,
    transaction: new Date(movements.transaction).toLocaleDateString(),
    realTransaction: new Date(movements.realTransaction).toLocaleDateString(),
    amount: `${movements.amount} €`,
    balance: `${movements.balance} €`,
  };
};
