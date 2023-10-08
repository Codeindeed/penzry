import useWeb3Auth from "../../hooks/useWeb3Auth";

function Button() {
  const [login] = useWeb3Auth();
  return (
    <button
      onClick={login}
    >
      Click me!
    </button>
  );
}

export default Button;
