import { UIDataRedux } from "../../../Interfaces/Redux_Interface";

export let UIData_Red: UIDataRedux = {
    direction: "ltr"
};
const UIReducer = (state: UIDataRedux = UIData_Red, action: any) => {
    switch (action.type) {
        case "SetUIdirection":
            UIData_Red.direction = action.payload.direction;
            const newState = Object.assign({}, state, UIData_Red);
            return newState;
        default:
            return state;
    }
};
export default UIReducer;
