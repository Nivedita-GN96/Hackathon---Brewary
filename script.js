
var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id','fname');
input.style.padding='10px 100px 10px 10px'
input.style.margin='20px 0px 0px 10px'
input.style.fontSize='20px'

document.body.append(input);


var btn = document.createElement('button');
btn.innerHTML = 'Search';
btn.setAttribute('type','button')
btn.style.textAlign="center"
//btn.setAttribute('class', 'btn text-center')
btn.addEventListener("click",search)
document.body.append(btn);


    function search() {
        var fn = document.getElementById('fname').value;
        console.log(fn);
        getUserAsync();
            
      
        async function getUserAsync() {
        try{
           
            // let response = await fetch(`https://api.openbrewerydb.org/breweries?by_name=${fn}`);
            let result=await fetch(`https://api.openbrewerydb.org/breweries?by_name=${fn}`);
            let res= await result.json();
            for (var i=0;i<=res.length;i++)
            {
                let div = document.createElement("p");
            div.style.margin="0px 10px";
            div.style.fontSize="30px"
            div.innerHTML=`Name=${res[i].name} &nbsp &nbsp  Brewery_type=${res[i].brewery_type} &nbsp &nbsp Phone=${res[i].phone} &nbsp &nbsp  Website_url=${res[i].website_url}`;
    

            document.body.append(div);
            console.log(res);
            
            }
           
              
    
        }
        catch(err){
            console.error(err);
              
           }
     
       }
    





    }
