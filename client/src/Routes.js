import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import {
    HomePage,
    BlogsListPage,
    BlogPage,
    NotFound,
    SignupPage,
    PleaseVerifyEmailPage,
    SignInPage,
    ForgotPasswordPage
} from './pages/index';
import {Header} from './components/header';
import { Footer} from './components/footer';
import {Navbar} from './components/navbar';

import { PrivateRoute } from "./auth/privateRoute";

export function AppRoutes() {
    return(
        <BrowserRouter>
        <Header/>
        <Navbar/>
            <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/allblogs" element={<BlogsListPage/>} />
            <Route path="/blog/:name" element={<BlogPage/>}/>
        
            {/* <Route path="/register" element={<RegisterPage/>} exact/> */}
           <Route path="/signup" element={<SignupPage/>}/>
           <Route path="/please-verify" element={<PleaseVerifyEmailPage/>} />
           <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
           <Route path="/signin" element={<SignInPage/>} />
            <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
};


