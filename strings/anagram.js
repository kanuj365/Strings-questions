function anagram(a,b){
  let map=new Map();
  for(let i=0;i<a.length;i++){
  if(map.has(a[i])){
    map.set(a[i],map.get(a[i]+1))
  }else{
    map.set(a[i],1)
  }
  }
  for(let i=0;i<b.length;i++){
    if(map.has(b[i])){
      map.set(b[i],map.get(b[i]-1));
    }else{return false;}
  }
  let keys=map.keys();
        // Loop over all keys and check if all keys are 0.
        // If so it means it is anagram.
  for(let key of keys){
    if(map.get(key)!=0){
      return false;
    }
  }
  return true;
}