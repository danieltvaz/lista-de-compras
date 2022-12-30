import "./styles.css";

import logo from "../../../assets/logo.jpeg";

type LoadingOverlayProps = {
  active: boolean;
};

export default function LoadingOverlay({ active }: LoadingOverlayProps) {
  if (active)
    return (
      <div className="loading-overlay__wrapper">
        <div className="loading-overlay_inner_wrapper">
          <img src={logo} />
          <p>Carregando</p>
        </div>
      </div>
    );
  return <></>;
}
