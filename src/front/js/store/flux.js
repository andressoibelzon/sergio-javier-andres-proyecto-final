import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { getToken } from "../tokenUtilities";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      user: [],
      auth: false,
    },
    actions: {
      // Use getActions to call a function within a fuction
      logout: () => {
        localStorage.removeItem("token");
        setStore({
          auth: false,
        });
      },

      validToken: async () => {
        // console.log(response.data.isLogged)
        let token = localStorage.getItem("token");
        console.log(token);
        try {
          let response = await axios.get(
            process.env.BACKEND_URL + "/api/valid-token",
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );

          if (response.status === 200) {
            console.log(response);
            setStore({
              auth: response.data.isLogged,
            });

            // console.log(response) //aca hay un error el response no trae.data.isLogged revisar ver dia 30 youtube
            return true;
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      },
      // indices: async () => {
      //     let response = await axios.get(
      //         process.env.BACKEND_URL + "/api/indices")
      //     console.log(response.data)
      // },
      login: async (email, password) => {
        console.log(email, password);
        try {
          let response = await axios.post(
            process.env.BACKEND_URL + "/api/login",
            {
              email: email,
              password: password,
            }
          );
          if (response.status === 200) {
            localStorage.setItem("token", response.data.access_token);
            setStore({
              auth: true,
            });
            Toastify({
              text: "Successfull, loging in",
              duration: 3000,
              destination: "https://github.com/apvarun/toastify-js",
              newWindow: true,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
              onClick: function () {}, // Callback after click
            }).showToast();
            // console.log(response.data.access_token)
            return true;
          }
        } catch (error) {
          console.log(error);
          if (error.response.status === 401)
            Toastify({
              text: "Email o contraseña no válido",
              duration: 3000,
              destination: "https://github.com/apvarun/toastify-js",
              newWindow: true,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
              onClick: function () {}, // Callback after click
            }).showToast();
          return false;
        }
      },

      getDataProfile: () => {
        fetch(process.env.BACKEND_URL + "/api/profile", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + getToken(),
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setStore({
              user: data.result,
            });
          });
      },

      actualizaUsusarioModificado: (email, password, first_name, last_name) => {
        fetch(process.env.BACKEND_URL + "/api/profile", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getToken(),
          },
          body: JSON.stringify({
            first_name,
            last_name,
            email,
            password,
          }),
        }).then((response) => {
          if (response.status !== 200) {
            throw new Error();
          }
          // actions.getDataProfile(); // Obtiene los datos del usuario en cuestion

          //     return response.json();
          //   })
          //   .then((data) => {
          //     navigate("/profile");
        });
        //   .catch(() => setShowError(true));
      },

      register: async (user_name, first_name, last_name, email, password) => {
        console.log(user_name, first_name, last_name, email, password);

        try {
          let response = await axios.post(
            process.env.BACKEND_URL + "/api/register",
            {
              user_name: user_name,
              first_name: first_name,
              last_name: last_name,
              email: email,
              password: password,
            }
          );

          if (response.status === 200) {
            Toastify({
              text: "Usuario creado satisfactoriamente",
              duration: 3000,
              destination: "https://github.com/apvarun/toastify-js",
              newWindow: true,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
              onClick: function () {}, // Callback after click
            }).showToast();

            return true;
          }
        } catch (error) {
          Toastify({
            text: "Email ya registrado",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () {}, // Callback after click
          }).showToast();

          // console.log(error);
          if (error.response.status === 401)
            // alert(error.response.data.msg)
            return false;
        }
      },

      onSubmitContact: async (email, comentario) => {
        console.log(email, comentario);
        try {
          let response = await axios.post(
            process.env.BACKEND_URL + "/api/onsubmit-contact",
            {
              email: email,
              comentario: comentario,
            }
          );
          if (response.status === 200) {
            Toastify({
              text: "Mensaje enviado",
              duration: 3000,
              destination: "https://github.com/apvarun/toastify-js",
              newWindow: true,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
              onClick: function () {}, // Callback after click
            }).showToast();
            return true;
          }
        } catch (error) {
          if (error.response.status === 401)
            Toastify({
              text: "Error en el envio, intente mas tarde",
              duration: 3000,
              destination: "https://github.com/apvarun/toastify-js",
              newWindow: true,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
              onClick: function () {}, // Callback after click
            }).showToast();
          return false;
        }
      },

      onSubmitSusc: async (email) => {
        console.log(email);
        try {
          let response = await axios.post(
            process.env.BACKEND_URL + "/api/suscripcion",
            {
              email: email,
            }
          );
          if (response.status === 200) {
            Toastify({
              text: "Estas suscrito",
              duration: 3000,
              destination: "https://github.com/apvarun/toastify-js",
              newWindow: true,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
              onClick: function () {}, // Callback after click
            }).showToast();
            return true;
          }
        } catch (error) {
          if (error.response.status === 401)
            Toastify({
              text: "Error en el envio, intente mas tarde",
              duration: 3000,
              destination: "https://github.com/apvarun/toastify-js",
              newWindow: true,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
              onClick: function () {}, // Callback after click
            }).showToast();
          return false;
        }
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({
            message: data.message,
          });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({
          demo: demo,
        });
      },
    },
  };
};

export default getState;
