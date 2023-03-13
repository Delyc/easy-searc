const getAdminCredentials = (): string => {

    return  JSON.parse(`${localStorage.getItem("token")}`);
  
  }
  
  export default getAdminCredentials
  