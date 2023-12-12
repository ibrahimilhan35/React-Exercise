import React from 'react';
import { connect } from 'react-redux';
import { light, dark } from './redux/actions';
import './Theme.css';

const Theme = ({ theme, light, dark }) => {
  return (
    <div className={`app ${theme}`}>
      <h2>Theme: {theme}</h2>
      <button onClick={dark}>Dark</button>
      <button onClick={light}>Light</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = {
  dark,
  light,
};

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
