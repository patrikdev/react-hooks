import React, { useState,useEffect } from 'react';


export default function Main() {
  
  const [fullname, setFullName] = useState({name:'name', familyName: 'family'})
  const [title, setTitle] = useState('useEffect() in Hooks');

  useEffect(() => {
    console.log('useEffect funfando')
    setFullName({name: 'Patrik', familyName: 'Familia feitosa'})
  },[])

  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {fullname.name}</h3>
      <h3>Family Name: {fullname.familyName}</h3>
    </div>
  )
}