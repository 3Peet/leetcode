var singleNumber = function(nums) {


    if(nums.length === 1) return nums[0];

    let map = new Map;

    for(let i = 0; i<nums.length;i++){
       if(!map.has(nums[i])){
           map.set(nums[i],1)
       }
       else {
           let temp = map.get(nums[i]);
           map.set(nums[i],temp+1);
       }

    }

    // get key by value
    function getByValue(map, searchValue) {
        for (let [key, value] of map.entries()) {
          if (value === searchValue)
            return key;
        }
      }

    return getByValue(map,1)
};
console.log(singleNumber([4,1,2,1,2]))
