import React from "react";
import ActiveList from "../../ActiveArticlesList";
import { ColinRow } from "../../../../components/views/ColInRow";

export const ArticlesLinksList = ({ activeList }) => {
  return (
    <ColinRow float="left" size={6}>
      <ActiveList activeList={activeList} />
    </ColinRow>
  );
};
