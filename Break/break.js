// Here I will choose all tree name expect Mangoes tree

const tree = [ "lemon","grapes",'bananas','Mango','Grapes'];

let treename = [];

for (let i=0;i<tree.length;i++){
    if (tree[i] === 'Mango'){
        break;
    }
    treename.push(tree[i])
}
console.log(treename);

