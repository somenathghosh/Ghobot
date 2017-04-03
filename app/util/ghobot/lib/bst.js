'use strict';

class Node {

  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }



}

class BST {

  constructor() {
    this.root = null;
  }

  push(val) {

    let root = this.root;

    if(!root) {
      this.root = new Node(val);
      return this;
    }

    let currentNode = root;
    let newNode = new Node(val);

     while(currentNode){
        if(val < currentNode.value){
            if(!currentNode.left){
               currentNode.left = newNode;
               break;
            }
            else{
               currentNode = currentNode.left;
          }
       }
       else{
           if(!currentNode.right){
              currentNode.right = newNode;
              break;
           }
           else{
              currentNode = currentNode.right;
           }
       }
    }


  }

  dfs(node){
    if(node){
      console.log(node.value);
      dfs(node.left);
      dfs(node.right);
    }
  }


  inorder(node){
     if(node){
        inorder(node.left);
        console.log(node.value);
        inorder(node.right);
     }
  }

  height(node){
     if(!node) return 0;
     var leftHeight = height(node.left);
     var rightHeight = height(node.right);

     return Math.max(leftHeight, rightHeight) + 1;
  }

  find (height){


  }



}

module.exports = BST;
