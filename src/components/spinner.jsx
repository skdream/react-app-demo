import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { gettext } from '../utils';

import {fetchNotice} from '../services/annouce'
import  './spinner.scss'


export default class Spinner extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  static defaultProps = {
    text: gettext('Loading'),
  }

  componentDidMount() {
    fetchNotice().then(res => {
      //console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {


    return (
      <div className="spinner-cont">
        <div className="spinner"></div>
        <span className="text">{this.props.text}</span>
      </div>
    );
  }
}
