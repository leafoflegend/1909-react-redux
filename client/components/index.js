import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  doIncrement,
  doDecrement,
} from '../store/actions.js';

const HomePage = props => {
  console.log('Props: ', props);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
      }}
    >
      <div
        style={{
          border: 'solid 1px red',
          padding: '1em',
        }}
      >
        <h1> Your Count Is: {props.count} </h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <button
          style={{ margin: '1em' }}
          onClick={props.handleIncrement}
        >
          Increment
        </button>
        <button
          style={{ margin: '1em' }}
          onClick={props.handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  count: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  handleIncrement: () => dispatch(doIncrement()),
  handleDecrement: () => dispatch(doDecrement()),
});

const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default ConnectedHomePage;
