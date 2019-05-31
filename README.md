# react-order

> 

[![NPM](https://img.shields.io/npm/v/react-order.svg)](https://www.npmjs.com/package/react-order) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
This is a simple wrapping component for sorting other components and elements.


```bash
npm install --save react-order
```

## Usage

```jsx
import React, { Component } from 'react'
import Order from 'react-order'

// Components
import TestComponent from './TestComponent'

class Example extends Component {

  render () {
		const { isMobileVersion } = this.props;

		const list = {
				first: isMobileVersion ? 1 : 2, 
				second: isMobileVersion ? 2 : 3, 
				third: isMobileVersion 3 : 1
		};

    return (
			<Order list={list}>
				<TestComponent orderkey="first">First Component</TestComponent>
				<TestComponent orderkey="second">Second Component</TestComponent>
				<div orderkey="third">Third element</div>
			</Order>
		)
	}
}
```

OR 


```jsx
import React, { Component } from 'react'
import Order from 'react-order'

// Components
import TestComponent1 from './TestComponent1'
import TestComponent2 from './TestComponent2'
import TestComponent3 from './TestComponent3'

class Example extends Component {

  render () {
		const { isReverse } = this.props;
		
		return (
			<Order>
				<TestComponent1 order={isReverse ? 3 : 1}/>
				<TestComponent2 order={2}/>
				<TestComponent3 order={isReverse ? 1 : 3}/>
			</Order>
		)
	}
}
```

OR 

```jsx
import React, { Component } from 'react'
import Order from 'react-order'

// Components
import TestComponent from './TestComponent'

class Example extends Component {
	render () {
		const { isMobileVersion } = this.props;
		
		const list = isMobileVersion ? 
			["first", "second", "third"] 
			: 
			["third", "first", "second"];

    return (
			<Order list={list}>
				<TestComponent orderkey="first">First Component</TestComponent>	
				<TestComponent orderkey="second">Second Component</TestComponent>	
				<div orderkey="third">Third element</div>	
			</Order>
		)
	}
}
```


## License

MIT © [stepanzabelin](https://github.com/stepanzabelin)
