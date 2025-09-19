"use client";
import React, { useState } from 'react'
import { createContext } from 'react';

export const AuthorizationContext = createContext<Authorization>({ authorization: "", });

export default function Container({ children, className }: {
  children: React.ReactNode,
  className?: string
}) {

  return (

    <div
      className='w-5xl mx-auto px-1 pt-3 flex items-center justify-center'
    >
      {children}
    </div>

  )
}