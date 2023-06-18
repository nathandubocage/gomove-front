import { useState } from "react";

import "./Switch.scss";

interface SwitchProps {
  initial?: boolean;
  onChange?: (checked: boolean) => void;
  id: string;
}

const Switch: React.FC<SwitchProps> = ({ initial = false, onChange, id }) => {
  const [checked, setChecked] = useState<boolean>(initial);

  const handleToggle = () => {
    setChecked(!checked);
    if (onChange) onChange(!checked);
  };

  return (
    <label className="switch">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
