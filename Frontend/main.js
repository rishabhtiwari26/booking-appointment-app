let submit=document.getElementById('submit');
submit.addEventListener("click", add)

function add(e){
    obj={
        Name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        mobile:document.getElementById('mobile').value
    }
    let obj_ser=JSON.stringify(obj)
    localStorage.setItem(obj.email,obj_ser)
    let obj_deser=JSON.parse(localStorage.getItem(obj.email))

    let li = document.createElement('li')
    li.className='by-email'
    
    let btn=document.createElement('button');
    btn.appendChild(document.createTextNode('Delete'))
    
    
    
    let li_value=document.createTextNode(obj_deser.Name+' '+obj_deser.email+' '+obj_deser.mobile)
    
    li.appendChild(li_value)
    li.appendChild(btn)
    document.body.appendChild(li)

    btn.addEventListener('click',del);
    function del(event){
        localStorage.removeItem(obj_deser.email)
        let li = event.target.parentNode
        let pli=li.parentNode
        pli.removeChild(li)
    }
}
