import React, { Component } from 'react';
import Order from 'react-order'
import TestComponent from './TestComponent';

import 'bootstrap/dist/css/bootstrap.min.css';


export default class Example1 extends Component {
	constructor(props) {
		super(props);

		this.initialOrder = {first:1, second:2, third:3, fourth:4, fifth:5};
		this.finiteOrder = {first:5, second:4, third:3, fourth:2, fifth:1};

		this.state = {
			order: 'initial',
			list: {...this.initialOrder}
		};
	}

	reverse = () => {
		const { order } = this.state;

		this.setState({
			order: order === 'initial' ? 'finite' : 'initial',
			list: order === 'initial' ? {...this.finiteOrder} : {...this.initialOrder}
		});
	}

	shuffle = () => {
		const shuffleList = {};
		
		Object.keys(this.state.list).forEach(key => {
			shuffleList[key] = Math.random();
		});
		
		console.log(shuffleList);

		this.setState({
			list: shuffleList
		});
	}

	reset = () => {
		this.setState({
			list: {...this.initialOrder}
		});
	}

	
  render () {

    return (
			<div>
				<h2 className="mb-4">"orderkey" + "list" is an object</h2>

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
				
				</div>
			</div>
    )
  }
}

