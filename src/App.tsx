import React from 'react';
import './App.css';
import ComboBox, {ComboBoxKeyValue, ComboBoxProps} from "./components/combobox/ComboBox";

function App() {

    const options = {
        options: getData(),
        label: "Movies",
        onChange: (value: string) => {
            console.log(value);
        },
        width: "100%"
    } as ComboBoxProps;

    return (
        <React.Fragment>
            <ComboBox {...options}/>
        </React.Fragment>
    );
}

export default App;

const getData = (): Array<ComboBoxKeyValue> => {
    return [
        {key: 'The Shawshank Redemption', value: 1994},
        {key: 'The Godfather', value: 1972},
        {key: 'The Godfather: Part II', value: 1974},
    ]
}
