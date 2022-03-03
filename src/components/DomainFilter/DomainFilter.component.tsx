import React from "react";

interface State {
}

interface Props {
  domains: string[];
  countries: string[];
  classifications: string[];
  subClassifications: string[];
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
  }

  render() {
    const { countries, classifications, subClassifications } = this.props || {
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
