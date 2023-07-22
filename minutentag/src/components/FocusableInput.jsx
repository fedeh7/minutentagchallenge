/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */

import React, { useEffect, useRef, forwardRef, useState } from "react";

const Input = forwardRef((props, ref) => {
  const { label } = props;

  return (
    <label>
      {label}
      <input type="text" ref={ref} />
    </label>
  );
});

const TextInput = forwardRef((props, ref) => {
  // Implement
  return <Input ref={ref} {...props} />;
});

// Implement:
// When the focused prop is changed from false to true,
// and the input is not focused, it should receive focus.
// If focused prop is true, the input should receive the focus.
export function FocusableInput({ focusable = true }) {
  // Implement

  const ref = useRef(null);

  useEffect(() => {
    if (focusable) {
      ref.current.focus();
    }
  });

  return <TextInput label="This is a focusable input: " ref={ref} />;
}
