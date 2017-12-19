var React=require('react');
var ReactDom=require('react-dom');
var {Router}=require('react-router');
var TestMain=require('./TestMain.jsx');
import Whether  from './Whether.jsx';

import Test from './test.jsx';
var {BrowserRouter, Route, IndexRoute, Link}=require('react-router-dom');
import WhetherForm from './WhetherForm.jsx';

ReactDom.render(<BrowserRouter>
					<TestMain>
							<Route path="/" component={Whether} />
					</TestMain>
				</BrowserRouter>,document.getElementById('app'));
