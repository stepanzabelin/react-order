import React, * as react from 'react';
import cn from 'classnames';

import Example1 from './Example1';
import Example2 from './Example2';

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
				<h1>Test "react-order"</h1>

				<ul className="nav nav-tabs" >
						<li className="nav-item">
							<button type="button" className={cn(`nav-link`, {"active": tab === "1"})} onClick={this.onClickTab} data-tab="1" >Common Array</button>
						</li>

						<li className="nav-item">
							<button type="button" className={cn(`nav-link`, {"active": tab === "2"})} onClick={this.onClickTab} data-tab="2">Common Object</button>
						</li>

						<li className="nav-item">
							<button type="button" className={cn(`nav-link`, {"active": tab === "3"})} onClick={this.onClickTab} data-tab="3">Order props</button>
						</li>
				</ul>

				{tab === "1" && <Example1/>}
				{tab === "2" && <Example2/>}
				

			</div>
    )
  }
}

