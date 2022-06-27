"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}


BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (!this.right) this.right = new BinarySearchTree(value);
    else this.right.insert(value)
  } else {
    if (!this.left) this.left = new BinarySearchTree(value)
    else this.left.insert(value)
  }
  this.total++;
}


BinarySearchTree.prototype.size = function () {
  let count = 1;
  if (this.left) {
    this.left.size();
    count++;
  }
  if (this.right) {
    this.right.size();
    count++;
  }
  return count;
}

BinarySearchTree.prototype.contains = function (value) {
  if(value=== this.value) return true;
  if(value < this.value){
    if(!this.left) return false;
    return this.left.contains(value);
  }
  else{
    if(!this.right) return false;
    return this.right.contains(value)
  }
}

BinarySearchTree.prototype.depthFirstForEach = function () {

}

BinarySearchTree.prototype.breadthFirstForEach = function () {

}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};