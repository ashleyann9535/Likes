let num = [9, 12 ,9]
let likeScript = document.querySelector('.likeScript');


function countLike(i){
    let likeCount=num[i]
    likeCount++
    num[i]=likeCount
    console.log(likeCount)

if(i === 0){
    likeScript = document.querySelector('#postOne');
    return likeScript.innerHTML = `${likeCount} likes(s)`
}else if(i === 1){
    likeScript = document.querySelector('#postTwo');
    return likeScript.innerHTML = `${likeCount} likes(s)`
}else{
    likeScript = document.querySelector('#postThree');
    return likeScript.innerHTML = `${likeCount} likes(s)`
}

}