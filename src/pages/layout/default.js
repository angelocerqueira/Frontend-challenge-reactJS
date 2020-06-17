import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

import { LayoutMain, LayoutWrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <LayoutWrapper>
      <Header />
      <SideBar />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
