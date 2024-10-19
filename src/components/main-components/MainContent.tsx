import React, { useRef, useState } from "react";
import CardContainer from "./CardContainer";

interface PropTypes {}

const MainContent: React.FC<PropTypes> = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentRows, setContentRows] = useState<Array<React.ReactNode>>([
    <CardContainer page={1}></CardContainer>,
    <CardContainer page={2}></CardContainer>,
    <CardContainer page={3}></CardContainer>,
  ]);
  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const diff =
      event.currentTarget.scrollHeight - event.currentTarget.scrollTop;
    const isBottom = diff == contentRef.current?.clientHeight;
    if (!isBottom) return;
    const newRow = <CardContainer page={contentRows.length + 1} />;
    setContentRows((rows) => rows.concat(newRow));
  };
  return (
    <div className="main-content" ref={contentRef} onScroll={scrollHandler}>
      {contentRows}
    </div>
  );
};

export default MainContent;
