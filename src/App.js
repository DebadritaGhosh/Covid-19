import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.Module.css";

import { fetchData } from "./api";

class App extends React.Component {

    state = {
        data: {},
        country: ""
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data });
    }
    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <h1 className={styles.logo}>COVID-19</h1>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}
export default App;