import React, * as react from 'react';
import cn from 'classnames';

import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';

import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends react.Component {
	constructor(props) {
		super(props);

		this.state = {
			tab: '1'
		};
	}

	onClickTab = event => {
		this.setState({
			tab: event.target.dataset.tab
		})
		
	}
	
  render () {
		const { tab } = this.state;

    return (
			<div className="container">
				<h1 className="mb-3">Test "react-order"</h1>

				<div className="mb-3">
					<a href="https://github.com/stepanzabelin/react-order" rel="nofollow">https://github.com/stepanzabelin/react-order</a>
				</div>

				<ul className="nav nav-tabs mb-4" >
						<li className="nav-item">
							<button type="button" className={cn(`nav-link`, {"active": tab === "1"})} onClick={this.onClickTab} data-tab="1">props "order"</button>
						</li>

						<li className="nav-item">
							<button type="button" className={cn(`nav-link`, {"active": tab === "2"})} onClick={this.onClickTab} data-tab="2">props "list" is an object</button>
						</li>

						<li className="nav-item">
							<button type="button" className={cn(`nav-link`, {"active": tab === "3"})} onClick={this.onClickTab} data-tab="3">props "list" is an array</button>
						</li>
				</ul>

				{tab === "1" && <Example1/>}
				{tab === "2" && <Example2/>}
				{tab === "3" && <Example3/>}

			</div>
    )
  }
}

