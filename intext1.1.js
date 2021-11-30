function AddElement() {
    const text = document.getElementById('wish');
    const input = document.getElementById('completed1');
    const wishes = document.getElementById('uncompleted');
    const completed2 = document.getElementById('completed2');
    let li = document.createElement('li');
    let check = document.createElement('input');
    let edit = document.createElement('input');
    let remove = document.createElement('input');
    let isCompleted = document.createElement('input');


    li.appendChild(check);
    li.appendChild(remove);
    li.appendChild(edit);
    li.appendChild(isCompleted);

    check.textContent = input.value;
    edit.value = 'Swap';
    remove.value = 'Remove';
    isCompleted.type = 'checkbox';
    edit.type = 'button';
    remove.type = 'button';


    edit.onclick = function() {
        check.textContent = input.value;
    }

    remove.onclick = function() {
        this.parentElement.remove(li);
    }

    isCompleted.onclick = function() {
        if (this.checked == true) {
            wishes.removeChild(li);
            completed2.appendChild(li);
        } else {
            wishes.appendChild(li);
            completed2.removeChild(li);
        }
    }
    wishes.appendChild(li);
    


    li.textContent = text.value;
    check.type = 'checkbox';
    check.onclick = function() {
        if (this.checked == true) {
            document.getElementById('uncompleted').removeChild(this.parentElement);
            document.getElementById('completed2').appendChild(this.parentElement);
        } else {
            document.getElementById('completed2').removeChild(this.parentElement);
            document.getElementById('uncompleted').appendChild(this.parentElement);
        }
    }
    li.appendChild(check);
    document.getElementById('uncompleted').appendChild(li);
}

    function SaveElements() {
        var check = document.getElementById('saveElements');
        if (check.checked == true) {
            wishes.style.display = 'none';
            completed2.style.display = 'none';
        } else {
            wishes.style.display = 'flex';
            completed2.style.display = 'flex';
            wishes.style.flexDirection = 'column';
            completed2.style.flexDirection = 'column';
        }
    }