import axios from "axios"

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
            // Use getActions to call a function within a fuction
            login: async (email, password) => {
                console.log(email, password)

                const res = await fetch(process.env.BACKEND_URL + "/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                });
                if (res.ok) {
                    const data = await res.json();
                    // navigate("/home");
                } else {
                    const error = await res.json();
                    setError(error.msg);
                }
            },

            register: async (user_name, first_name, last_name, email, password) => {
                console.log(user_name, first_name, last_name, email, password)

                try {
                    let response = await axios.post(process.env.BACKEND_URL + "/api/register", {
                        user_name: user_name,
                        first_name: first_name,
                        last_name: last_name,
                        email: email,
                        password: password,
                    })

                    if (response.status === 200) {
                        console.log(response);
                        return true;
                    }
                } catch (error) {
                    console.log(error);
                    if (error.response.status === 401)
                        alert(error.response.data.msg)
                    return false;
                }




                // const res = await fetch(process.env.BACKEND_URL + "/api/register", {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json"
                //     },
                //     body: JSON.stringify({
                //         user_name: user_name,
                //         first_name: first_name,
                //         last_name: last_name,
                //         email: email,
                //         password: password,
                //     }),
                //     // mode: 'no-cors'
                // });
                // if (res.ok) {
                //     console.log("llega")
                //     const data = res.json();
                //     console.log(data)
                //     // navigate("/home");
                // } else {
                //     const error = await res.json();
                //     error.msg;
                //     console.log(error)
                // }
            },







            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
                    const data = await resp.json()
                    setStore({
                        message: data.message
                    })
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error)
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
                    demo: demo
                });
            }
        }
    };
};

export default getState;

// logout: (check = true) => {
//         setStore({
//             isLoggedIn: false,
//             checkAuth: check
//         });
//     },
// RecoveryPassword: async (email) => {
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             email: email
//         }),
//     };
//     try {
//         const response = await fetch(
//             process.env.BACKEND_URL + "/api/recoverypassword", options
//         );
//         if (response.status === 200) {
//             setStore({
//                 mailSend: true
//             });
//         } else {
//             setStore({
//                 mailError: true
//             });
//         }
//     } catch (error) {
//         setStore({
//             mailError: true
//         })
//     }

// },