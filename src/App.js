import { useState,useEffect } from "react";
import { useStore } from "./store";
import LoadingPage from "./pages/users/LoadingPage";
import { getProperties, getSearchProperties } from "./api/property-service";
import { setProperties } from "./store/property/propertyActions";
import { CustomRoutes } from "./router/custom-routes";
import { ToastContainer } from "react-toastify";
import { getUser } from "./api/user-service";
import { loginSuccess } from "./store/user/userActions";





function App() {
  const [loading, setLoading] = useState(true);
  const {dispatchUser,dispatchProperty} = useStore();
 

  const loadData = async () =>  { 
    try {
      let resp = await getProperties();
      dispatchProperty(setProperties(resp.data));

      const token = localStorage.getItem("token");
      if(token){
        resp = await getUser();
        dispatchUser(loginSuccess(resp.data));
      }
      setLoading(false);

    } catch (err) {
      console.log(err);
     setLoading(false);
    }




  }
  useEffect(() => {
    loadData();
    
  },[])
  if(loading) 
  return(<LoadingPage/>)

  else
  return (

  <>
   <CustomRoutes/>
   <ToastContainer/>
 </>  

 );
}


export default App;