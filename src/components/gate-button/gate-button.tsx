import * as React from 'react';
import './index.scss';


// 一定要有这个props
export interface GateButtonProps {
  /**
   * 类型
   */
  type?: "primary" | "secondary" | "normal";
  color?: string;
  style?: object;
  content1111?: string
}

const GateButton: React.FC<GateButtonProps> = function ColorfulButton({
  type = 'primary',
  color,
  style = {},
  content1111,
  ...otherProps
}) {
  console.log('content1111', content1111);
  return (
    // todo 删除 @ts-ignore
    // @ts-ignore
    <>
      <div >gate button {content1111}</div>
    </>
  );
};

GateButton.displayName = 'GateButton';
export default GateButton;


