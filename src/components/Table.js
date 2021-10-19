import React, { memo } from "react";
import { TableWrapper } from "../elements";

export const Table = memo(({ children }) => {
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  );
});
