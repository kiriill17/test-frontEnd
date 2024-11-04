import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';

export default function App() {
  return (
    <>
      <Header />
      <Blog />
    </>
  );
}
