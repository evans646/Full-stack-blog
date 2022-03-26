import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from "./auth/PrivateRoute";
import {
  AboutPage,
  HomePage,
  ArticlesListPage,
  ArticlePage,
  LoginPage,
  RegisterPage,
  ContactPage,
  EbooksPage,
  ForumPage,
  TutorialsPage,
  SocialMediaMarketingPage,
  SecondSocialMediaPage,
  BusinessManagementPage,
  WebDevelopmentPage,
  WebTechnologiesPage,
  DataStructuresPage,
  DatabaseManagementSystemPage,
  GraphicDesignPage,
  SoftwarePage,
  HardwarePage,
  ProfilePage,
  PleaseVerifyEmailPage,
  EmailVerificationLandingPage,
  ForgotPasswordPage,
  PasswordResetLandingPage,
  NotFoundPage,
} from "./pages/index";
import { Header, Navbar ,TopHeader,FooterSection } from "./components/index";


export function AppRoutes() {
  return (
    <Router>
        <TopHeader />
        <Header />
        <Navbar />
        <hr/>
        <div id="content">
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/articles-list" element={<ArticlesListPage/>} />
            <Route path="/verify-email/:verificationString" component={<EmailVerificationLandingPage/>}/>
            <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
            <Route path="/please-verify" element={<PleaseVerifyEmailPage/>} />
            <Route path="/article/:name" element={<ArticlePage/>} exact />
            <Route path="/register" element={<RegisterPage/>} exact/>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/forum" element={
             <PrivateRoute>
                <ForumPage/>
             </PrivateRoute>
            } exact />
            <Route path="/e-library" element={
            <PrivateRoute>
              <EbooksPage/>
            </PrivateRoute>} />
            <Route path="/tutorials" element={
            <PrivateRoute>
              <TutorialsPage/>
            </PrivateRoute>} />
            <Route path="/user/profile" element={
            <PrivateRoute>
              <ProfilePage/>
            </PrivateRoute>} exact />

            <Route path="/featured/webdevelopement" element={<WebDevelopmentPage/>}/>
            <Route  path="/featured/webTechnologies" element={<WebTechnologiesPage/>}/>
            <Route path="/featured/graphicDesign" element={<GraphicDesignPage/>}/>
            <Route path="/featured/dataStructures" element={<DataStructuresPage/>}/>
            <Route path="/featured/databaseManSys" element={<DatabaseManagementSystemPage/>}/>
            <Route  path="/featured/socialMediamrkting" element={<SocialMediaMarketingPage/>} exact/>
            <Route path="/featured/socialMediamrkting/page=1" element={<SecondSocialMediaPage/>} exact/>
            <Route path="/featured/businessManagement" element={<BusinessManagementPage/>}/>
            <Route path="/hardware" element={<HardwarePage/>} />
            <Route path="/software" element={<SoftwarePage/>} />
            <Route  path="/reset-password/:passwordResetCode"  element={<PasswordResetLandingPage/>}/>
            <Route path="/contact"  element={<ContactPage/>} />
            <Route element={<NotFoundPage/>} />
          </Routes>
        </div>
      <FooterSection />
    </Router>
  );
};

