import React, { Component } from 'react';

class Customer extends Component {
  render() {
    return (
      <div>
        <CustomerProfile id={this.props.id} name={this.props.name} image={this.props.image}/>
        <CustomerInfo birth={this.props.birth} sex={this.props.sex} job={this.props.job}/>
      </div>
    );
  }
}

class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="profile" />
        <h2>{this.props.name}({this.props.id})</h2>
      </div>
    );
  }
}

class CustomerInfo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.birth}</p>
        <p>{this.props.sex}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}


export default Customer;
