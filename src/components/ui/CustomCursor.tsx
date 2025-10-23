import React, { useEffect, useRef, useState } from "react";import { useEffect, useRef } from "react";

import { createPortal } from "react-dom";

/**

 * CustomCursor renders a small dot and a soft follower circle.export const CustomCursor = () => {

 * It only enables on devices with any fine pointer and sets html[data-cursor="enabled"]  const cursorRef = useRef<HTMLDivElement>(null);

 * so global CSS can hide the native cursor conditionally.  const followerRef = useRef<HTMLDivElement>(null);

 */

export const CustomCursor: React.FC = () => {  useEffect(() => {

  const dotRef = useRef<HTMLDivElement | null>(null);    // Enable only on fine pointer devices (mouse/trackpad)

  const followerRef = useRef<HTMLDivElement | null>(null);    const isFinePointer =

  const rafRef = useRef<number | null>(null);      window.matchMedia?.("(any-pointer: fine)").matches ?? false;

    /* deprecated: replaced by PointerCursor.tsx */
    export {};
  const [enabled, setEnabled] = useState(false);
