import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import {PrivateRoute} from './auth/PrivateRoute';
import {RegisterPage} from './pages/Register/Register';
import {LogInPage } from './pages/Login/LogIn'
import {ForgotPasswordPage} from './pages/ForgotPasswordPage';
import {ContactPage} from './pages/ContactPage';
import {EbooksPage} from './e-Library/EbooksPage';
import {Tutorials} from './e-Library/Tutorials';
import {ForumPage} from './e-Library/ForumPage';

import {WebDevelopmentPage} from './pages/Featured/WebDevelopement';
import {WebTechnologiesPage} from './pages/Featured/WebTechnologies';
import {GraphicDesignPage} from './pages/Featured/GraphicDesign';
import {DataStructures} from './pages/Featured/DataStructures';
import {DatabaseManagementSys} from './pages/Featured/DbManagementSystems';
import {SocialMediaMarketing} from './pages/Featured/SocialmediaMarketing';
import { BusinessManagement } from './pages/Featured/BusinessManagement';
//import { PrivateRoute } from './auth/PrivateRoute'
import { PleaseVerifyEmailPage } from './pages/PleaseVerifyEmail';
import { EmailVerificationLandingPage } from './pages/EmailVerificationLandingPage';
import {PasswordResetLandingPage } from './pages/PasswordResetLandingPage';

import { HardwarePage } from './pages/HardwarePage';
import { SoftwarePage } from './pages/SoftwarePage';

import { NavBar } from './NavBar';
import { Header } from './Header';
import { Header2 } from './Header2';
import {Footer} from './Footer';
import './App.css';
import './index.css';

export class Routes extends Component {

    render() {
      return (
        <Router>
          <div>
            <Header2/>
            <Header/>
            <NavBar />
            <hr/>
            <div id="content" >
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={AboutPage} />
                <Route path="/articles-list" component={ArticlesListPage} />
                <Route path="/verify-email/:verificationString" component={EmailVerificationLandingPage}/ >
                <Route path="/article/:name" component={ArticlePage} />
                <Route path="/forgot-password" component={ForgotPasswordPage} />
                <Route path="/please-verify" component={PleaseVerifyEmailPage}/>
                <Route path="/article/:name" component={ArticlePage} />
                <Route path="/signup" component={RegisterPage} />
                <Route path="/login" component={LogInPage} />
                <PrivateRoute path="/e-library" component={EbooksPage} />
                <PrivateRoute path="/tutorials" component={Tutorials} />
                <Route path="/featured/webdevelopement" component={WebDevelopmentPage} />
                <Route path="/featured/webTechnologies" component={WebTechnologiesPage} />
                <Route path="/featured/graphicDesign" component={GraphicDesignPage} />
                <Route path="/featured/dataStructures" component={DataStructures} />
                <Route path="/featured/databaseManSys" component={DatabaseManagementSys} />
                <Route path="/featured/socialMediamrkting" component={SocialMediaMarketing} />
                <Route path="/featured/businessManagement" component={BusinessManagement} />
                <Route path="/hardware" component={HardwarePage} />
                <Route path="/software" component={SoftwarePage} />
                <Route path="/reset-password/:passwordResetCode" component={PasswordResetLandingPage}/>
                <PrivateRoute path="/forum" component={ForumPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      );
    }
  }
