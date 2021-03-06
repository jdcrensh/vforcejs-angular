import promisify from '../../lib/promisify';

export default class VFRemotingService {
  constructor($window, $q, VFControllerName) {
    'ngInject';
    if (!VFControllerName) {
      return;
    }
    const VFController = $window[VFControllerName];
    if (VFController) {
      for (const [key, fn] of Object.entries(VFController)) {
        this[key] = promisify($window, $q, fn);
      }
    }
  }
}
