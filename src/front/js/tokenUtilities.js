//Funciones para leer y escribir el token

//Guarda el token
export function saveToken(token) {
    localStorage.setItem("token", token);
}
// Borra el token
export function deleteToken() {
    debugger;
    localStorage.removeItem("token");
}
//Coge el token
export function getToken() {
    return localStorage.getItem("token");
}
//Guarda el token para que la pagina siga logeada despues de cerrarla o refrescar
export function isLoggedIn() {
    return !!getToken();
}