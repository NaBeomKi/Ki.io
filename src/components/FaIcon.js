import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FaIcon = memo(({ type = "fas", name, size = undefined }) => {
  const className = size ? `fa-${size}x` : undefined;

  return (
    <span>
      <FontAwesomeIcon className={className} icon={[type, name]} />
    </span>
  );
});
