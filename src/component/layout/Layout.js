import Header from "../header/Header"
import SignUp from "../signup/SignUp"
import AboutUs from "../AboutUs/AboutUs";
import {Route, withRouter} from "react-router-dom";
import ThankYou from "../thankyou/ThankYou";
import Home from "../home/Home";

const Layout = () => {
   
    const toggleRoutes = () => {
        //return routes for authenticated student
        if(localStorage.getItem('loggedInStudent')){
            return(
                <div>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>    
                <Route path="/about-us" component={AboutUs}/>
                </div>
            );
        }else{
            //return routes for unauthenticated student
            return(
                <div>
                    <Route exact path="/" component={SignUp}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/thank-you" component={ThankYou}/>
                    <Route path="/about-us" component={AboutUs}/>
                </div>
            );
        }
    }

    return(
        <div>
            <Header />
            {toggleRoutes()}
        </div>
    )
}
export default withRouter(Layout);