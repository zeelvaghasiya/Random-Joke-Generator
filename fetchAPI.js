const URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=single";

const text = document.querySelector(".content");
const button = document.querySelector(".btn");

function main()
{
    async function getJoke(){
        const res = await fetch(URL);
        if(res.ok == false)
        {
            throw ("Something that is wrong");
        }
        const res_data = await res.json();
        return res_data;
    }
    
    getJoke()
        .then((data)=>{
            text.innerHTML = `${data.joke}`;
        })
}

button.addEventListener("click",main);