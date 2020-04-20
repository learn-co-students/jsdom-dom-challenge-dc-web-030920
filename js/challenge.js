
const plus = document.getElementById('plus'),
    minus = document.getElementById('minus'),
    heart = document.getElementById('heart'),
    pause = document.getElementById('pause'),
    comment = document.getElementById('submit')

let count = 0;
let heartCount = 0;


let timer=function(){
    return setInterval(function(){
        document.getElementById("counter").innerText = count;
        ++count;
        heartCount= 0;
    },1000)
    }
let interval=timer();

plus.addEventListener('click', function() {
    document.getElementById("counter").innerText = count;
    ++count;
})
minus.addEventListener('click', function() {
    document.getElementById("counter").innerText = count;
    --count;
})
heart.addEventListener('click', function(){
    heartCount++
    num = document.getElementById("counter").innerText
    // console.log(`${num} has ${heartCount} likes`)
    if (heartCount < 2){
        var likeNode = document.querySelector('.likes');
        var newLi = document.createElement('li');
      
        newLi.innerText = `${num} has ${heartCount} like`;
        
        likeNode.appendChild(newLi);     
    } else {
        var lastChild = document.querySelector('.likes').lastChild
        lastChild.innerText = `${num} has ${heartCount} likes`;
        // likeNode.appendChild(newLi); 
    }
    
})

pause.addEventListener('click', function(){
    num = document.getElementById('counter').innerText
    if (pause.innerText == "pause") {
        
        clearInterval(interval)
        pause.innerText = "resume"
        document.querySelectorAll('button').forEach( button => { //button.id != "pause" ? button.disabled = true : button.disabled = false
            //why cant i one line this. stupid java script
            
                if (button.id != "pause") {
                    button.disabled = true
                } 
            })
        
    } else {
        document.querySelectorAll('button').forEach( button => button.disabled = false)
        interval=timer()
        pause.innerText = "pause"
    }

})


submit.addEventListener('click', function(event){
    event.preventDefault();
    var commentNode = document.querySelector('.comments');
    var pNode = document.createElement('p');
    pNode.innerText = document.getElementById('comment-input').value;
    commentNode.appendChild(pNode);
})
