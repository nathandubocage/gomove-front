import "./CardSetting.scss";

import arrowRight from "../../../assets/icons/arrow_right.svg";

export default function CardSetting({
  title,
  subtitle,
  onClick,
}: {
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick} className="card-setting">
      <div className="card-setting__heading">
        <span className="card-setting__title">{title}</span>
        <span className="card-setting__subtitle">{subtitle}</span>
      </div>

      <img src={arrowRight} alt="Modifier" />
    </div>
  );
}
