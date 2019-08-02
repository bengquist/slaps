import * as React from "react";

function noop() {}

export function preventDefault<E extends React.SyntheticEvent>(
  func: (event: E) => void = noop
) {
  return (event: E) => {
    event.preventDefault();
    func(event);
  };
}

export function stopPropagation<E extends React.SyntheticEvent>(
  func: (event: E) => void = noop
) {
  return (event: E) => {
    event.stopPropagation();
    func(event);
  };
}
