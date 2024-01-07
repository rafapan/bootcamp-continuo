export const mapAccountFromApiToViewModel = (account) => {
  return {
    ...account,
    alias: account.name,
  };
};

// necesitamos un mapper inverso para enviarselo al servidor
export const mapAccountFromViewModelToApi = (account) => {
  return {
    ...account,
    name: account.alias,
  };
};
