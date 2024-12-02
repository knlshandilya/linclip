import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LinkCard from './components/LinkCard'
import './App.css'

function App() {
  return (
    <div className="p-8">
      <LinkCard title="Pocket Clone" url="https://github.com" description="An app to save and organize links." />
    </div>
  );
}
export default App
