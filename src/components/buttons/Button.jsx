import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({
  label,
  onClick,
  type = "button",
  color = "primary",
  size = "medium",
  disabled = false,
}) => {
  return (
    <ButtonComp>
      <button
        type={type}
        className={`btn ${color} ${size}`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </ButtonComp>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired, // Text on the button
  onClick: PropTypes.func, // Click handler function
  type: PropTypes.oneOf(["button", "submit", "reset"]), // Button type
  color: PropTypes.oneOf(["primary", "secondary", "danger"]), // Button color
  size: PropTypes.oneOf(["small", "medium", "large"]), // Button size
  disabled: PropTypes.bool, // Disabled state
};

export default Button;

const ButtonComp = styled.div`
  /* Button.css */

  .btn {
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
  }

  .btn:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Color variants */
  .btn.primary {
    background-color: #007bff;
    color: white;
  }
  .btn.secondary {
    background-color: #6c757d;
    color: white;
  }
  .btn.danger {
    background-color: #dc3545;
    color: white;
  }
  .btn.dark {
    background-color: #000;
    color: #fff;
  }

  /* Size variants */
  .btn.small {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
  .btn.medium {
    font-size: 1rem;
    padding: 10px 20px;
  }
  .btn.large {
    font-size: 1.2rem;
    padding: 15px 30px;
  }

  .btn:hover:enabled {
    opacity: 0.9;
  }
`;
