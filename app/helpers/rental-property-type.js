import Ember from 'ember';
const communityPropertyTypes = [
  'condo', 'townhouse', 'apartment'
];

export function rentalPropertyType(type/*, hash*/) {
  if(communityPropertyTypes.includes(type)){
    return 'community';
  }
  return 'standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
