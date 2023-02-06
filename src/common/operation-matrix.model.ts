import KeyValueEntity from "./key-value-entity";

const arrOperationsIds = [
    "StartsWidth",
    "EndsWith",
    "Contains",
    "Equals",
    "NotEquals",
    "In",
    "NotIn",
    "IsEmpty",
    "IsNotEmpty",
    "IsNotNull",
    "IsNull",
    "GreaterThan",
    "GreaterThanOrEqual",
    "LessThan",
    "LessThanOrEqual",
    "NotEqual",
    "Equal",
    "And",
    "Or",
];

const arrOperationsNames = [
    "Starts Width",
    "Ends With",
    "Contains",
    "Equals",
    "Not Equals",
    "In",
    "Not In",
    "Is Empty",
    "Is Not Empty",
    "Is Not Null",
    "Is Null",
    "Greater Than",
    "Greater Than Or Equal",
    "Less Than",
    "Less Than Or Equal",
    "Not Equal",
    "Equal",
    "And",
    "Or",
];

const arrOperator = [
    "Like",
    "Like",
    "Like",
    "=",
    "!=",
    "In",
    "Not In",
    "Is Empty",
    "Is Not Empty",
    "Is Not Null",
    "Is Null",
    ">",
    "=>",
    "<",
    "=<",
    "!=",
    "=",
    "And",
    "Or",
]

export enum OperationApplyingField {
    String = 'String',
    Number = 'Number',
    Date = 'Date',
}

const OperationMatrixModel = () => {
    const ret = [];

    for (let i = 0; i < arrOperationsIds.length; i++) {
        const operationMatrixItem = new OperationMatrixItem();
        operationMatrixItem.operationId = arrOperationsIds[i];
        operationMatrixItem.operationName = arrOperationsNames[i];
        operationMatrixItem.operationType = new OperationMatrixItemType();
        operationMatrixItem.operationType.operationApplyingField = [OperationApplyingField.String];
        operationMatrixItem.operationType.operationOperator = arrOperator[i];
        ret.push(operationMatrixItem);
    }

    return ret;
}

export const LightOperationMatrixModel = () => {
    const ret = [];

    for (let i = 0; i < arrOperationsIds.length; i++) {
        const operationMatrixItem = {
            key: arrOperationsIds[i],
            value: arrOperationsNames[i]
        } as KeyValueEntity;
        ret.push(operationMatrixItem);
    }

    return ret;
}

export class OperationMatrixItem {
    operationId: string | any = '';
    operationName: string | any = '';
    operationType: OperationMatrixItemType | any = '';
}

// This tells you when to show hide the options based on this type !
export class OperationMatrixItemType {
    operationApplyingField: Array<OperationApplyingField> | any = [];
    operationOperator: string | any = '';
}

export default OperationMatrixModel;
