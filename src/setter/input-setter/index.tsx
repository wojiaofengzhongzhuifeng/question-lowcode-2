import * as React from "react";
import { Input } from "@alifd/next";
import {useEffect} from "react";

interface AltStringSetterProps {
  // 当前值
  value: string;
  // 默认值
  defaultValue: string;
  // setter 唯一输出
  onChange: (val: string) => void;
  // AltStringSetter 特殊配置
  placeholder: string;
}



const AltStringSetter: React.FC<AltStringSetterProps> = ({
   onChange,
   value,
   defaultValue,
   placeholder,
}) => {
  useEffect(() => {
    if (value == undefined && defaultValue) {
      onChange(defaultValue);
    }
  }, []);

  return (
    <Input
      style={{ border: '10px solid red' }}
      value={value}
      placeholder={placeholder || ''}
      onChange={(e) => {
        onChange(e)
      }}
    />
  );
};

AltStringSetter.displayName = 'AltStringSetter';

export default AltStringSetter;
