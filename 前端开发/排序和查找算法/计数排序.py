def count_sort(arr,max_count=100):
    count = [0 for _ in range(max_count+1)]
    for val in arr:
        count[val]+=1
    arr.clear()
    for ind,val in enumerate(count):
        for i in range(val):
            li.append(ind)
