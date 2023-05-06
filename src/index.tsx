export type { ColorfulButtonProps } from './components/colorful-button';
export { default as ColorfulButton } from './components/colorful-button';

export type { ColorfulInputProps } from './components/colorful-input';
export { default as ColorfulInput } from './components/colorful-input';

export { default as GateButton } from './components/gate-button/gate-button';

export { default as FAQS } from './components/FAQs/index';

import AltStringSetter from './setter/input-setter';
import FAQInputSetter from "./setter/faq-input-setter";


init()

function init(){
  registerCustomSetter()
}

function registerCustomSetter(){
  const registerSetter = window.AliLowCodeEngine.setters.registerSetter;
  registerSetter('AltStringSetter', AltStringSetter);
  registerSetter('FAQInputSetter', FAQInputSetter);

}

const bizCssPrefix = 'bizpack';

export {
  bizCssPrefix
}
