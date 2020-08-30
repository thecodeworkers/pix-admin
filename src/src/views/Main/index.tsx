import React, { FC } from 'react';
import { connect } from 'react-redux';
import { StateProps } from './type';
import Auth from '../Auth';
import Home from '../Home';

const Main: FC<StateProps> = ({ auth }) => {
  const { isAuth } = auth;

  return (
    <>
      {
        isAuth ? (
          <Home/>
        ) : (
          <Auth/>
        )
      }
    </>
  )
}

const mapStateToProps = ({ auth }: StateProps) => ({ auth });

export default connect(mapStateToProps)(Main);
