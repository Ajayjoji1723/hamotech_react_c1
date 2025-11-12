import React from "react";

export default function TabItem(props) {
  const { tab, onUpdateTabId, isActive } = props;
  const { tabId, displayText } = tab;

  const onClickTab = () => {
    onUpdateTabId(tabId);
  };
  const activeClassName = isActive ? "tab_item_active_btn" : "";
  return (
    <li className="m-2 tab-item">
      <button
        onClick={onClickTab}
        className={`tab_item_btn ${activeClassName}`}
      >
        {displayText}
      </button>
    </li>
  );
}
