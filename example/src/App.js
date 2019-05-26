import React, { Component } from 'react'

import Order from 'react-order'

export default class App extends Component {
	constructor(props) {
		super(props);

		this.initialEnum = ["first", "second", "third", "fourth"];

		this.state = {
			list: this.initialEnum
		};

	}

	reverse = () => {
		this.setState({
			list: this.state.list.reverse()
		})
	}

  render () {

    return (
			<div>
				<div>Text "react-order"</div>
			
				<div>
					<button type="button" onClick={this.reverse}>reverse</button>
				</div>
				
				<Order list={this.state.list}>
					<div orderkey="first">First</div>	
					<div orderkey="second">Second</div>	
					<div orderkey="third">Third</div>	
					<div orderkey="fourth">Fourth</div>	
				</Order>
			</div>
    )
  }
}

