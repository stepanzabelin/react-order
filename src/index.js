import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
 
const Order = (props) => {
	const { children, list }  = props;

	let keysOrders = {};

	if(Array.isArray(list)) {
		for(let item in list) {
			keysOrders[list[item].toString()] = item.toString();
		}
	} else {
		for(let item in list) {
			keysOrders[item.toString()] = list[item] || 0;
		}
	}

  const newList = React.Children.toArray(children).map(function (child, i) {
		let props  = {...child.props};

		if(!props.hasOwnProperty('key')) {
			props.key = props.orderkey || Math.random().toString();
		}
 
		if(!props.hasOwnProperty('orderkey')) {
			props.orderkey = i.toString();
		}

		if(!props.hasOwnProperty('order')) {
		  props.order = keysOrders.hasOwnProperty(props.orderkey) ? keysOrders[props.orderkey] : i;
		}

		return React.cloneElement(child, props);

	}).sort((a, b) => {
    return (a.props.order - b.props.order);
  })
 
  return (
		<React.Fragment>
			{newList}
		</React.Fragment>
	)
};


export default Order;