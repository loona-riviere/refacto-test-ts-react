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

function Select(props: any) {
  return <select name={props.name} multiple>
  {props.values.map((value: string) => (
    <option value={value} key={value}>
      {value}
    </option>
  ))}
</select>;
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
        <Select name='countries' values={countries}/>
        <Select name='classifications' values={classifications}/>
        <Select name='subClassifications' values={subClassifications}/>
        
      </>
    );
  }
}

export default DomainFilter;
