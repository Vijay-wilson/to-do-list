function ajax() {
    // creating an XHR object
    var xhttp = new XMLHttpRequest();
    // event listsener
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status ==200){
            var response = JSON.parse(this.responseText);
            // console.log(response);
            
            // EXTRACT VALUE FOR HTML HEADER. 
            var col = [];
            for (var i = 0; i < response.length; i++) {
            for (var key in response[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
            }
            // console.log(col);

            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");

            // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

            var tr = table.insertRow(-1);                   // TABLE ROW.

            for (var i = 1; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
            tr.style.border = "1px solid black";

        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < response.length; i++) {
            tr = table.insertRow(-1);

            for (var j = 1; j < col.length-1; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = response[i][col[j]];
            }
            if (j == 3) {

                var tabCell = tr.insertCell(-1);

                
                // NOW HERE I AM CREATING AND ADDING A CHECKBOX TO THE TABLE CELL.
                var chk = document.createElement('input');
                chk.setAttribute('type', 'checkbox');
                tabCell.appendChild(chk);
                // chk.id = "id" + i +j;
                

                if(response[i][col[j]] == true){
                    chk.checked = true;
                    chk.disabled = true;
                }

                chk.addEventListener('change',(event)=>{
                    if(event.currentTarget.checked){
                        count++;
                        console.log("checked " + count);
                        checkcounter();
                    }
                    else{
                        count--;
                        console.log("checked " + count);
                    }
                })
                // tabCell.appendChild(chk);     
            }
            // console.log(chk.id);
            tr.style.border = "1px solid black";
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("sample");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    
    }
    
    }

    xhttp.open("Get","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

var count=0;
function checkcounter(){
    let promise= new Promise(function(resolve,reject){
        if(count==5){
            resolve("Congrats. 5 Tasks have been Successfully Completed");
        }
    })
    promise.then(function(s){
        alert(s);
    })
}