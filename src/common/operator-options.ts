import {LightOperationMatrixModel} from "./operation-matrix.model";
import {ComboBoxProps} from "../components/combobox/ComboBox";

const operatorOptions = {
    options: LightOperationMatrixModel(),
    label: "Operators",
    onChange: (value: string) => {
        console.log(value);
    },
    width: "100%"
} as ComboBoxProps;

export default operatorOptions;
