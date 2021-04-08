/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const entries = {};

  domains.forEach((elem) => {
    let pointIndex = elem.length;
    while (pointIndex >= 0) {
      pointIndex = elem.lastIndexOf('.', pointIndex);
      const domainZoneName = `.${elem.substring(pointIndex + 1).split('.').reverse().join('.')}`;
      pointIndex--;

      if (entries[domainZoneName] === undefined) {
        entries[domainZoneName] = 1;
      } else {
        entries[domainZoneName] += 1;
      }
    }
  });

  return entries;
}

module.exports = getDNSStats;
