# react-order

> 
[![NPM](https://img.shields.io/npm/v/react-order.svg)](https://www.npmjs.com/package/react-order) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![DEMO](https://img.shields.io/badge/-demo-blue.svg)](https://stepanzabelin.github.io/react-order/)

This is a simple wrapping component for sorting other components and dom elements.


## Install

```bash
npm install --save react-order
```

## Usage

This component wraps your components that need to be sorted. There are 3 ways to use:

###### 1. Each child component has a props "order"

```jsx
<Order>
	<TestComponent1 order={num1}/>
	<TestComponent2 order={num2}/>
	<TestComponent3 order={num3}/>
</Order>
```

###### 2. Each child component has a props "orderkey". The parent component has a props "list" which is an object

```jsx
const list = {
	foo: 1,
	bar: 2,
	baz: 3
}
```
```jsx
		
<Order list={list}>
	<TestComponent1 orderkey="foo"/>
	<TestComponent2 orderkey="bar"/>
	<TestComponent3 orderkey="baz"/>
</Order>
```

###### 3. Each child component has a props "orderkey". The parent component has a props "list" which is an array

```jsx
const list = ["foo", "bar", "baz"] 
```
```jsx
		
<Order list={list}>
	<TestComponent1 orderkey="foo"/>
	<TestComponent2 orderkey="bar"/>
	<TestComponent3 orderkey="baz"/>
</Order>
```

### Complete examples

Case 1:

```jsx
import React, { Component } from 'react'
import Order from 'react-order'

// Components
import TestComponent1 from './TestComponent1'
import TestComponent2 from './TestComponent2'
import TestComponent3 from './TestComponent3'

class Example extends Component {

  render () {
		const { isReverse } = this.props
		
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

Case 2:

```jsx
import React, { Component } from 'react'
import Order from 'react-order'

// Components
import TestComponent from './TestComponent'

class Example extends Component {

  render () {
		const { isMobileVersion } = this.props

		const list = {
				first: isMobileVersion ? 1 : 2, 
				second: isMobileVersion ? 2 : 3, 
				third: isMobileVersion 3 : 1
		}

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

Case 3:

```jsx
import React, { Component } from 'react'
import Order from 'react-order'

// Components
import TestComponent from './TestComponent'

class Example extends Component {
	render () {
		const { isMobileVersion } = this.props

		const list = isMobileVersion ? 
			["first", "second", "third"] 
			: 
			["third", "first", "second"]

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
