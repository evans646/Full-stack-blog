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

import {WebDevelopmentPage} from './pages/Featured/WebDevelopement';
import {WebTechnologiesPage} from './pages/Featured/WebTechnologies';
import {GraphicDesignPage} from './pages/Featured/GraphicDesign';
//import { PrivateRoute } from './auth/PrivateRoute'
import { PleaseVerifyEmailPage } from './pages/PleaseVerifyEmail';
import { EmailVerificationLandingPage } from './pages/EmailVerificationLandingPage';
import {PasswordResetLandingPage } from './pages/PasswordResetLandingPage'

import { NavBar } from './NavBar';
import {Footer} from './Footer';
import './App.css';
import './index.css';

export class Routes extends Component {

    render() {
      return (
        <Router>
          <div className='page-container'>
            <NavBar />
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
                <PrivateRoute path="/e-library" component={AboutPage} />
                <Route path="/featured/webdevelopement" component={WebDevelopmentPage} />
                <Route path="/featured/webtechnologies" component={WebTechnologiesPage} />
                <Route path="/featured/graphicDesign" component={GraphicDesignPage} />
                <Route path="/reset-password/:passwordResetCode" component={PasswordResetLandingPage}/>
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
