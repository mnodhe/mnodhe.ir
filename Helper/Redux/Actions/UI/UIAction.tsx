import { UIDataRedux } from "../../../Interfaces/Redux_Interface";

export const SetUIdirection_Action = (data: UIDataRedux) => {
    return {
        type: "SetUIdirection",
        payload: data,
    };
};
