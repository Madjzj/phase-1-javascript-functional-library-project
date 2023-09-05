function myEach(collection, callback){
    if(typeof collection === "array"){
        for(const thing of collection){
                callback(thing);
        }
    } else {
        for(const thing in collection){
            callback(collection[thing])
        }
    }
    return collection;
}
function myMap(collection, callback){
    const newArray = []
    if(typeof collection === "array"){
        for(const thing of collection){
                newArray.push(callback(thing));
        }
    } else {
        for(const thing in collection){
            newArray.push(callback(collection[thing],thing));
        }
    }
    return newArray;
}
function myReduce(collection,callback,acc = 0){
    let skipFirst = false;
    if(acc === 0){
        skipFirst = true;
    }
    if(typeof collection === "array"){
        for(const thing of collection){
            if(skipFirst){
                acc = thing;
                skipFirst = false;
            }else{
                acc = callback(acc, thing, collection);
            }
        }
    } else {
        for(const thing in collection){
            if(skipFirst){
                acc = collection[thing];
                skipFirst = false;
            }else{
                acc = callback(acc,collection[thing],collection);
            }
        }
    }

    return acc;
}
function myFind(collection, predicate){
    if(typeof collection === "array"){
        for(const thing of collection){
            if(predicate(thing)){
                return thing
            }
        }
    } else {
        for(const thing in collection){
            if(predicate(collection[thing])){
                return collection[thing]
            }
        }
    }
    return;
}
function myFilter(collection,predicate){
    const filterArray = []
    if(typeof collection === "array"){
        for(const thing of collection){
            if(predicate(thing)){
                filterArray.push(thing)
            }
        }
    } else {
        for(const thing in collection){
            if(predicate(collection[thing])){
                filterArray.push(collection[thing])
            }
        }
    }
    return filterArray;
}
function mySize(collection){
    if(typeof collection === "array"){
        return collection.length
    } else {
        return Object.keys(collection).length
    }
}
function myFirst(array, n=1){
    if(n === 1){
        return array[0]
    }
    return array.slice(0,n)
}
function myLast(array, n = 1){
    if(n === 1){
        return array[array.length-1]
    }
    return array.slice(array.length-n)
}
function myKeys(object){
    return Object.keys(object)
}
function myValues(object){
    const returnArray = []
    for(const thing in object){
        returnArray.push(object[thing])
    }
    return returnArray
}