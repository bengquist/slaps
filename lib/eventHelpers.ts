export function preventDefault<E extends React.SyntheticEvent>(
  func: (event: E) => void = () => {}
) {
  return (event: E) => {
    event.preventDefault();
    func(event);
  };
}
