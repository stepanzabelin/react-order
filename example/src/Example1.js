import React, { Component } from 'react';
import Order from 'react-order'
import TestComponent from './TestComponent';

import 'bootstrap/dist/css/bootstrap.min.css';


export default class Example1 extends Component {
	constructor(props) {
		super(props);

		this.initialList = ["first", "second", "third", "fourth", "fifth"];

		this.state = {
			list: [...this.initialList]
		};

	}

	reverse = () => {
		this.setState({
			list: this.state.list.reverse()
		})
	}

	shuffle = () => {
		this.setState({
			list: this.state.list.sort((a, b) => 0.5 - Math.random())
		})
	}

	reset = () => {
		this.setState({
			list: [...this.initialList]
		})
	}

	
  render () {

    return (
			<div>
				<h2>props "list" as array</h2>

				<div className="card">
					<div className="card-header">
						<button type="button" className="btn btn-primary" onClick={this.reverse}>reverse</button>
						<button type="button" className="btn btn-secondary" onClick={this.shuffle}>shuffle</button>
						<button type="button" className="btn btn-danger" onClick={this.reset}>reset</button>
					</div>

					<div className="card-body">
						<Order list={this.state.list}>
							<TestComponent orderkey="first" className="alert alert-primary">&lt;FirstComponent/&gt;</TestComponent>	
							<TestComponent orderkey="second" className="alert alert-secondary">&lt;SecondComponent/&gt;</TestComponent>	
							<TestComponent orderkey="third" className="alert alert-success">&lt;ThirdComponent/&gt;</TestComponent>	
							<TestComponent orderkey="fourth" className="alert alert-danger">&lt;FourthComponent/&gt;</TestComponent>
							<TestComponent orderkey="fifth" className="alert alert-info">&lt;FifthComponent/&gt;</TestComponent>		
						</Order>
					</div>
					
					<code>

					</code>
				</div>
			</div>
    )
  }
}

