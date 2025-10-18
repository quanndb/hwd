"use client";
import React from "react";

type SmartTextProps = {
  children: string;
  className?: string;
  quoteStyle?: React.CSSProperties;
};

const SmartText: React.FC<SmartTextProps> = ({
  children,
  className,
  quoteStyle,
}) => {
  // Hỗ trợ cả dấu " và “ ”
  const parts = children.split(/(["“”].*?["“”])/g);

  return (
    <p className={className}>
      {parts.map((part, index) => {
        // Kiểm tra phần nằm trong dấu ngoặc kép
        const isQuoted =
          (part.startsWith('"') && part.endsWith('"')) ||
          (part.startsWith("“") && part.endsWith("”"));

        if (isQuoted) {
          const innerText = part.slice(1, -1); // bỏ dấu ngoặc kép
          return (
            <span key={index} style={quoteStyle}>
              {innerText}
            </span>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </p>
  );
};

export default SmartText;
