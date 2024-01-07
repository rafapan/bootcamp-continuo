// mapper - mapeador modificar una entiendad que nos viene del servidor y queremos modificarla para lo que mostramos al cliente}

// Lo que nos viene de servidor es un array. Necesitamos un metodo que mapee realmente un accountList de la api al viewmodel
// export const mapAccountListApiToViewModel = (accountList) =>
//   Array.isArray(accountList)
//     ? accountList.map((account) => mapAccountListApiToViewModel(account))
//     : [];
export const mapAccountListFromApiToViewModel = (accountList) => {
  return accountList.map((account) => mapAccountFromApiToViewModel(account));
};

const mapAccountFromApiToViewModel = (account) => {
  return {
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: `${account.balance} €`,
    lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),
  };
};
