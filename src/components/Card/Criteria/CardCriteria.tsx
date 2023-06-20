import { CardCriteriaProps } from "../../../types/card.spec";

import "./CardCriteria.scss";

export default function CardCriteria({
  background,
  icon,
  title,
}: CardCriteriaProps) {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="card-criteria"
    >
      <div className="card-criteria__content">
        <img
          src={icon}
          alt="Critères de recherche"
          className="card-criteria__icon"
        />
        <span className="card-criteria__title">{title}</span>
      </div>
    </div>
  );
}
