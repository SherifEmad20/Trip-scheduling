export const environment = {
  production: true,
  //@ts-ignore
  apiUrl: window["env"]["apiUrl"] || "8080",
  //@ts-ignore
  debug: window["env"]["debug"] || false


};
