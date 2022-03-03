import React from "react";
import { threadId } from "worker_threads";

interface State {
  countries: string[];
  classifications: string[];
  subClassifications: string[];
}

interface Props {
  domains: string[];
}


class DomainFilter extends React.Component<Props, State> {
  componentDidMount() {
    const { domains } = this.props;
    this.state = {
      countries: [],
      classifications: [],
      subClassifications: [],
    };

    this.setState({
      ...this.state,
      countries: domains.map(d => d.substring(0,2)).filter(
        (e, i, l) => l.indexOf(e) === i
      ),
      classifications: domains.map(d => d.substring(3,5)).filter(
        (e, i, l) => l.indexOf(e) === i
      ),
      subClassifications: domains.map(d => d.substring(6)).filter(
        (e, i, l) => l.indexOf(e) === i
      ),
    });
    this.forceUpdate();
  }

  render() {
    const { countries, classifications, subClassifications } = this.state || {
      countries: [],
      classifications: [],
      subClassifications: [],
    };

    return (
      <>
        <select name="countries" multiple>
          {countries.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>
        <select name="classifications" multiple>
          {classifications.map((classification) => (
            <option value={classification} key={classification}>
              {classification}
            </option>
          ))}
        </select>
        <select name="subClassifications" multiple>
          {subClassifications.map((subClassification) => (
            <option value={subClassification} key={subClassification}>
              {subClassification}
            </option>
          ))}
        </select>
      </>
    );
  }
}

export default DomainFilter;
