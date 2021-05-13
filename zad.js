const zad1 = ()=>{
    const array =  [-1, 15, 16, 0, 21, 20, -10]
    let back_i = array[0]
    let s = 0
    let max = 0
    let tr = false

    for(let i=1; i<array.length; i++){
        if (tr){
            s+=array[i]
            tr = false
            if(s > max){
                max = s
            }
            else{
                s=0
            }
        }
        if(array[i] +1 == array[i+1]){
            s+= array[i]
            if(array[i+1] +1 != array[i+2]){
                tr = true
            }
            if(s > max){
                max = s
            }
        }
        else{
            s=0
        }
        
    }
    alert(max)
}


const zad2 = (p_one, p_two)=>{
    var arr = new Map([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
        ['f', 6],
        ['g', 7],
        ['h', 8],
      ]); 

    p_one = p_one.value
    p_two = p_two.value
    console.log(p_one, p_two)
    
    var p_one_1 = Number(arr.get(p_one[0]))
    var p_one_2 = Number(p_one[1])

    var p_two_1 = Number(arr.get(p_two[0]))
    var p_two_2 = Number(p_two[1])

    let j = p_one_2
    for(let i = p_one_1; i<=8 && j<=8; i++){
        if (i == p_two_1 && j==p_two_2){
            alert(true)
        }
        console.log(i, j)
        j++
    }


    console.log("=============================")
    j = p_one_2
    for(let i = p_one_1; i>0 && j<=8; i--){
        if (i == p_two_1 && j==p_two_2){
            alert(true)
        }
        console.log(i, j)
        j++
    }


    console.log("=============================")
    j = p_one_2
    for(let i = p_one_1; i<=8 && j>0; i++){
        if (i == p_two_1 && j==p_two_2){
            alert(true)
        }
        console.log(i, j)
        j--
    }

    console.log("=============================")
    j = p_one_2
    for(let i = p_one_1; i>0 && j>0; i--){
        if (i == p_two_1 && j==p_two_2){
            alert(true)
        }
        console.log(i, j)
        j--
    }
    
}


const zad3 = (str1, str2)=>{
    var str1 = str1.value
    var str2 = str2.value

    console.log(str2.length)


    let str_tmp = ""
    for(let i=0; i<str1.length && str1!=str2; i++){

        str_tmp = ""
        let j = str2.search(str1[i])

        if(j!=-1){
            if(((i%2==0 && j%2==0) || (i%2==1 && j%2==1)) && i!=j){
                str_tmp +=  str2.slice(0,i)
                str_tmp += str2[j]
                str_tmp += str2.slice(i+1, j)
                str_tmp += str2[i]
                str_tmp += str2.slice(j+1, str2.length)
                str2 = str_tmp
                console.log(i, j, str2)
            }
        }

    }
    if(str1==str2){
        alert(true)
    }
    

}