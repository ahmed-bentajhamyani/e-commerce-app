import { MouseEventHandler } from "react";

export type ButtonType = {
  action?: MouseEventHandler<HTMLButtonElement>;
  style?: string;
  disabled?: boolean;
  icon?: React.ReactElement;
  iconStyle?: string;
  text?: string;
  textStyle?: string;
};

export const Button = (button: ButtonType) => {
  return (
    <button
      onClick={button.action}
      className={`flex justify-center items-center rounded-full duration-300 focus:duration-0 ${button.style}`}
      disabled={button.disabled}
    >
      {button.icon && (
        <span className={`${button.iconStyle}`}>{button.icon}</span>
      )}
      {button.text && (
        <span className={`${button.textStyle}`}>{button.text}</span>
      )}
    </button>
  );
};
