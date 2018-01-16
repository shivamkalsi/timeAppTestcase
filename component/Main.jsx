var React=require('react');
var ReactDom=require('react-dom');
var {Router}=require('react-router');
var TestMain=require('./TestMain.jsx');
import Whether  from './Whether.jsx';
import $ from 'jquery';
import 'foundation-sites';
import 'foundation-sites/js/foundation.core';
import 'foundation-sites/js/foundation.util.mediaQuery';
import 'foundation-sites/js/foundation.toggler';
import 'foundation-sites/js/foundation.sticky';


import Test from './test.jsx';
var {BrowserRouter, Route, IndexRoute, Linkwe}=require('react-router-dom');
import WhetherForm from './WhetherForm.jsx';

require('foundation-sites/dist/css/foundation.min.css');

$(document).foundation();


ReactDom.render(<BrowserRouter>
					<TestMain>
							<Route path="/" component={Whether} />
					</TestMain>
				</BrowserRouter>,document.getElementById('app'));
