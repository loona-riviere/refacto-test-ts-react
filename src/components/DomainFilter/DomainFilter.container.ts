import DomainFilter from './DomainFilter.component';
import { connect } from 'react-redux'
import { getClassifications, getCountries, getDomains, getSubClassifications } from '../../redux/domains/selectors';
import { AppState } from '../../redux/store';

const mapStateToProps = (state: AppState) => ({
  domains: getDomains(state),
  countries: getCountries(state),
  classifications: getClassifications(state),
  subClassifications: getSubClassifications(state),
})

export default connect(mapStateToProps)(DomainFilter)
