const PANEL_RADIUS = "25px";
const BUTTON_RADIUS = "35px";
const SHADOW = "rgba(0, 0, 0, 0.27) 0 10px 20px";

export const focusLight = {
  highLightColor: "#ff8f70",
  lightDisabledColor: "#ecf0f1",
  darkDisabledColor: "#7f8c8d",
  bgFocusColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
  bgBreakColor: "linear-gradient(to right, #2193b0, #6dd5ed)",
  fontColor: "white",
  panelFontColor: "#5A6381",
  panelBgColor: "white",
  panel: `
  box-shadow: ${SHADOW};
  border-radius: ${PANEL_RADIUS};
  background-color: white;
  color: #5A6381;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  `,
  button: `
  box-shadow: ${SHADOW};
  border-radius: ${BUTTON_RADIUS};
  background-color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  `,
  topButtonsWrapper: `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 15px;
  color: #7f8c8d;
  `,
};
export const breakLight = {
  highLightColor: "#40B4CE",
  lightDisabledColor: "#ecf0f1",
  darkDisabledColor: "#7f8c8d",
  bgFocusColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
  bgBreakColor: "linear-gradient(to right, #2193b0, #6dd5ed)",
  fontColor: "white",
  panelFontColor: "#5A6381",
  panelBgColor: "white",
  panel: `
  box-shadow: ${SHADOW};
  border-radius: ${PANEL_RADIUS};
  background-color: white;
  color: #5A6381;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  `,
  button: `
  box-shadow: ${SHADOW};
  border-radius: ${BUTTON_RADIUS};
  background-color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  `,
  topButtonsWrapper: `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 15px;
  color: #7f8c8d;
  `,
};

export const focusDark = {
  highLightColor: "#ff8f70",
  lightDisabledColor: "#7f8c8d",
  darkDisabledColor: "#ecf0f1",
  bgFocusColor: "linear-gradient(to right, #1F1C18, #8E0E00)",
  bgBreakColor: "linear-gradient(to right, #0F2027, #2C5364)",
  fontColor: "#ecf0f1",
  panelFontColor: "#ecf0f1",
  panelBgColor: "#1F1B17",
  panel: `
  box-shadow: ${SHADOW};
  border-radius: ${PANEL_RADIUS};
  background-color: #1F1B17;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  `,
  button: `
  box-shadow: ${SHADOW};
  border-radius: ${BUTTON_RADIUS};
  background-color: #1F1B17;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  `,
  topButtonsWrapper: `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 15px;
  color: #ecf0f1;
  `,
};
export const breakDark = {
  highLightColor: "#40B4CE",
  lightDisabledColor: "#7f8c8d",
  darkDisabledColor: "#ecf0f1",
  bgFocusColor: "linear-gradient(to right, #1F1C18, #8E0E00)",
  bgBreakColor: "linear-gradient(to right, #0F2027, #2C5364)",
  fontColor: "#ecf0f1",
  panelFontColor: "#ecf0f1",
  panelBgColor: "#0E2027",
  panel: `
  box-shadow: ${SHADOW};
  border-radius: ${PANEL_RADIUS};
  background-color: #0E2027;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  `,
  button: `
  box-shadow: ${SHADOW};
  border-radius: ${BUTTON_RADIUS};
  background-color: #0E2027;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  `,
  topButtonsWrapper: `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 15px;
  color: #ecf0f1;
  `,
};
