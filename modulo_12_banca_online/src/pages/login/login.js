import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from "../../common/helpers";
import { isValidLogin } from "./login.api";
import { formValidation } from "./login.validations";
import { history, routes } from "../../core/router";
// Datos que vamos a manejar en esta página
//  en este objeto vamos a guardar toda la información del login
let login = {
  user: "",
  password: "",
};

onUpdateField("user", (event) => {
  // segundo parámetro. lo que vamos a recoger es la funcion que queremos ejecutar cuando el usuario escriba en el input
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  login = { ...login, user: value };

  formValidation.validateField("user", login.user).then((result) => {
    onSetError("user", result);
  });
});

onUpdateField("password", (event) => {
  const value = event.target.value;
  // login.password = value;
  login = {
    ...login,
    password: value,
  };
  formValidation.validateField("password", login.password).then((result) => {
    onSetError("password", result);
  });
});

const onNavigate = isValid => {
    if (isValid) {
        history.push(routes.accountList);
    } else {
        alert('Usuario y/o contraseña no válidos')
    }
} //nos va a dar el booleano desde el servidor para decirnos si es valido o no para navegar o no a la siguiente página

onSubmitForm("login-button", () => {
  formValidation.validateForm(login).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded)
      isValidLogin(login).then((isValid) => {
        onNavigate(isValid);
      });
  });
});

// Vamos a comprobar que estos datos son correctos. En el servidor ya tenemos esa funcionalidad. Ahora tenemos que enviar nuestros datos al servidor a traves de un método de api, hacemos una llamada con una url al servidor para que nos envie la información que necesitamos. modulo_12_banca_online/src/pages/login/login.api.js
