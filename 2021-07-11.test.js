function ipv4ToBinary(addr) {
  return addr
    .split('.')
    .map((octet) => parseInt(octet, 10).toString(2).padStart(8, '0'))
    .join('');
}

function inRange(addr, netmask) {
  const [maskAddr, maskBits] = netmask.split('/');
  const binAddr = ipv4ToBinary(addr);
  const binMaskAddr = ipv4ToBinary(maskAddr);
  return binAddr.substring(0, maskBits) === binMaskAddr.substring(0, maskBits);
}

test('inRange', () => {
  expect(inRange('192.168.4.27', '192.168.0.0/16')).toBe(true);
  expect(inRange('192.168.4.27', '192.168.1.0/24')).toBe(false);
});
