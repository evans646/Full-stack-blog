import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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


export function Routes() {
  return (
    <Router>
        <TopHeader />
        <Header />
        <Navbar />
        <hr/>
        <div id="content">
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route path="/verify-email/:verificationString" component={EmailVerificationLandingPage}/>
            <Route path="/article/:name" component={ArticlePage} />
            <Route path="/forgot-password" component={ForgotPasswordPage} />
            <Route path="/please-verify" component={PleaseVerifyEmailPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route path="/account/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/forum" component={ForumPage} exact />
            <PrivateRoute path="/e-library" component={EbooksPage} />
            <PrivateRoute path="/tutorials" component={TutorialsPage} />
            <PrivateRoute path="/user/profile" component={ProfilePage} exact />
            <Route path="/featured/webdevelopement" component={WebDevelopmentPage}/>
            <Route  path="/featured/webTechnologies" component={WebTechnologiesPage}/>
            <Route path="/featured/graphicDesign" component={GraphicDesignPage}/>
            <Route path="/featured/dataStructures" component={DataStructuresPage}/>
            <Route path="/featured/databaseManSys" component={DatabaseManagementSystemPage}/>
            <Route  path="/featured/socialMediamrkting" component={SocialMediaMarketingPage} exact/>
            <Route path="/featured/socialMediamrkting/page=1" component={SecondSocialMediaPage} exact/>
            <Route path="/featured/businessManagement" component={BusinessManagementPage}/>
            <Route path="/hardware" component={HardwarePage} />
            <Route path="/software" component={SoftwarePage} />
            <Route  path="/reset-password/:passwordResetCode" component={PasswordResetLandingPage}/>
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      <FooterSection />
    </Router>
  );
};
