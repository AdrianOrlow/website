import { Spinner } from "@shared/Loading";
import React from "react";
import { Container, Toggle } from "./ToggleStyle";

interface Props {
  className?: string;
  label: string;
  value: boolean;
  loading?: boolean;
  onValueChange(newValue: boolean): void;
}

const ToggleView: React.FC<Props> = ({
  className,
  label,
  value,
  onValueChange,
  loading
}) => {
  const handleClick = () => {
    !loading && onValueChange(!value);
  };

  return (
    <Container className={className} onClick={handleClick}>
      {loading && <Spinner />}
      {!loading && (
        <Toggle role="switch" aria-checked={value} onClick={handleClick} />
      )}
      {label}
    </Container>
  );
};

export default ToggleView;
