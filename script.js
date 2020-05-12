//cookie ----exemplu facut la un videoclip de pe youtube----
// var cookieArray = "PREF=al=en; SID=wQdd4l5VUPJ6GXh43uYPtFlCtyonYOnkHe-mDumoavkgYXGpOPqX7lafZmAD8QhO8tXEGw.; APISID=JFEpuhykYyLjOA98/AJxBczQcg9lf_EkD8; SAPISID=IdN-4Ad__QP6dMdI/AMRt5UITnU_v3XEZk; __Secure-APISID=JFEpuhykYyLjOA98/AJxBczQcg9lf_EkD8; __Secure-3PAPISID=IdN-4Ad__QP6dMdI/AMRt5UITnU_v3XEZk; CONSENT=YES+RO.ro+20180415-11-0; wide=1; SIDCC=AJi4QfFHErdWzV7PYu9aDTOFayOrNcEBzOqjdL3jRlgo-BkkroSjgTJYzt74x290IUb2npzqCZc"

// document.cookie=`PREF=al=en; SID=wQdd4l5VUPJ6GXh43uYPtFlCtyonYOnkHe-mDumoavkgYXGpOPqX7lafZmAD8QhO8tXEGw.; APISID=JFEpuhykYyLjOA98/AJxBczQcg9lf_EkD8; SAPISID=IdN-4Ad__QP6dMdI/AMRt5UITnU_v3XEZk; __Secure-APISID=JFEpuhykYyLjOA98/AJxBczQcg9lf_EkD8; __Secure-3PAPISID=IdN-4Ad__QP6dMdI/AMRt5UITnU_v3XEZk; CONSENT=YES+RO.ro+20180415-11-0; wide=1; SIDCC=AJi4QfFHErdWzV7PYu9aDTOFayOrNcEBzOqjdL3jRlgo-BkkroSjgTJYzt74x290IUb2npzqCZc`
//--------stringul trebuia transformat in obiect, mai jos este functia, se pune pe consola pt rezultat----------
console.clear();
const getCookiesAsObject= () => {
    let cookieArray = document.cookie.split("; ");
    let cookiesObj = {};
    cookieArray.forEach((element)=>{
        let cookieData = element.split("=");
        cookiesObj[cookieData[0]]= cookieData[1];  
        // console.log("elementul dupa split",cookieData)
        // console.log("cookiesObj[cookieData[0]] ",cookiesObj[cookieData[0]])
        // console.log("cookieData[1] ",cookieData[1]); 
    })
    return cookiesObj;
}
const startingCookiesApp = ()=>{
    //iau in cookiesObj tot ce este in functie
    const cookiesObject = getCookiesAsObject();
    // console.log("aici este cookiesObject:  ",cookiesObject)

    document.cookie = "My beautiful name = James Bond; expires = Mon,11 May 2021 23:30:00 UTC;";
    document.cookie = 'movie=Noe; expires=' + new Date (2020,06,26).toUTCString();
    document.cookie ='lastName = Bershka; expires=' +new Date(9999,0,1).toUTCString();
    console.log("document.cookie aici: ",document.cookie)

    // selectez cookies pe radio buttons
    const radioBtns = document.getElementsByName("language");
    // console.log("radioBtns ",radioBtns)
    for(let i = 0 ;i < radioBtns.length ; i++){
        // aici mai verific daca butonul e  checked
        if(radioBtns[i].value === cookiesObject.language){
            // console.log("care e butonul aici?  ",radioBtns[i])
        radioBtns[i].checked = "checked";
        }
        // caut daca este language
        radioBtns[i].addEventListener("click",(event) =>{
            console.log("valoarea selectata pt cookies",radioBtns[i].value);
            document.cookie = `language=${event.target.value}`;        
        })
    }
}
startingCookiesApp();

const startingLocalStorage = () =>{
    // localStorage.setItem('firstName','Alex');
    // localStorage.setItem('lastName','Besa');
    // localStorage.removeItem('first');
    // localStorage.removeItem('last');
    const enBtn=document.getElementById('enBtn');
    const roBtn=document.getElementById('roBtn')
   
    enBtn.addEventListener("click",()=>{
        localStorage.setItem('lang','en-US')
        // console.log("local storage english",localStorage.lang)
        // console.log("value of btn      ",enBtn.value)
    })
       
    roBtn.addEventListener("click", ()=>{
        localStorage.setItem('lang','ro-RO')
        // console.log("local storage romanian",localStorage.lang);
        // console.log("value of btnRO : ",roBtn.value)
    })
    if(roBtn.value == localStorage.getItem('lang')){
        // console.log(localStorage.getItem('lang'));
        roBtn.checked = 'checked';
        console.log("LocalStorage - ramane romanian language checked")  
    }else if(enBtn.value === localStorage.lang){
        enBtn.checked = 'checked';
        console.log("LocalStorage - ramane english checked")
    }
}
startingLocalStorage();





//sa facem aceeasi aplicatie doar ca folosindu-ne de local storage
//management local storage este mai simplu
//pt a schimbasau adauga valori avem metode care ne ajuta
//getItem,setItem,removeitem,clear

//---------exercitii facute de mine sa inteleg----------------------

// //set an item on localStorage
// localStorage.setItem('name','Alex');

// //get item
// // console.log(localStorage.getItem('name'));

// //remove an item
// localStorage.removeItem('name');

// //set an item on sessionStorage
// sessionStorage.setItem('name',"Besa");
// // get item
// console.log(sessionStorage.getItem('name'));
// // remove
// sessionStorage.removeItem('name');


// //cookies
// document.cookie = 'name=Alexandru';
// //set expire date
// document.cookie = 'movie=Noe; expires=' + new Date (2020,06,26).toUTCString();

// document.cookie ='lastName = Bershka; expires=' +new Date(9999,0,1).toUTCString();

// console.log(document.cookie)

