import { createStore } from 'solid-js/store';

export const [deviceState, updateDeviceState] = createStore({
  selectedDesign: 0,
  clockHz: 0,
  uiInEnabled: false,
  uoOutEnabled: false,
  uioEnabled: false,
  uioOutEnabled: false,
  uiIn: [] as string[],
  uioOE: [] as string[],
  uioIn: [] as string[],
  uoOutValue: 0,
  uioOutValue: 0,
});
