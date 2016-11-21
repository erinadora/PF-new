import jquery     from 'jquery';
import angular    from 'angular';
import router     from 'angular-ui-router';
import main       from './index.html';
import components from './components';
import config     from './config';
import services   from './services';
import material   from 'angular-material';
import aria       from 'angular-aria';

import './scss/main.scss';
import '../node_modules/angular-wheelie/dist/angular-wheelie.js';
import '../node_modules/angular-scrollie/dist/angular-scrollie.js';
import '../node_modules/angular-snapscroll/dist/angular-snapscroll.js';


const app = angular.module('myApp', [router, aria, material, 'snapscroll']);

/**
 * Insert top-level template main.html and bootstrap the app
 */

components(app);
config(app);
services(app);

document.body.innerHTML = main;
angular.bootstrap(document, [app.name], {});
