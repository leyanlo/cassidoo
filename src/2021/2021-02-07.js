class ProductList {
  list = [];
  add(n) {
    return this.list.push(n);
  }
  product(m) {
    if (m <= 0) return 1;
    return this.list.slice(-m).reduce((product, n) => product * n, 1);
  }
}

const p = new ProductList();
p.add(7); // [7]
p.add(0); // [7,0]
p.add(2); // [7,0,2]
p.add(5); // [7,0,2,5]
p.add(4); // [7,0,2,5,4]
p.product(3); // return 40 because 2 * 5 * 4
