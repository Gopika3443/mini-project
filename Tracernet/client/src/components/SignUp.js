import {React,useState} from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    VStack,
    HStack,
    Link,
  } from '@chakra-ui/react'
import "./SignUp.css"

 
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
          setIsInvalid(true);
          return;
        }
    }
    const handleLoggedIn=()=>{
      window.localStorage.setItem("isLoggedIn",true)
    }

  return (
    <VStack justifyContent={"center"} alignItems={"center"} h={"100vh"}>
<div className="login-div">
        <div className='prologo'><img src='https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png'></img></div>
  <div className="fields">
    <div className="username">
      <svg className="svg-icon" viewBox="0 0 20 20">
        <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
      </svg>
      <input type="username" className="user-input" placeholder="username" />
    </div>
    <div className="password">
      <svg className="svg-icon" viewBox="0 0 20 20">
        <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
      </svg>
      <input type="password" className="pass-input" placeholder="create password" />
    </div>
    <div className="password">
      <svg className="svg-icon" viewBox="0 0 20 20">
        <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
      </svg>
      <input type="password" className="pass-input" placeholder="confirm password" />
    </div>
    <button className="signing-button">Sign Up</button>
    <HStack mt={"20px"} justifyContent={"flex-end"}>
        <VStack alignItems={"flex-end"}>
          <p >Already have an account?</p>
        <Button onClick={handleLoggedIn} color="blue.500" fontSize="sm">Login</Button>
        </VStack>
    </HStack>
  </div>
</div>
    </VStack>
    

  )
}

export default SignUp