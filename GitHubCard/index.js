

//step-1 creating .get request and check if it is working

const myArr = [ 
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"

]


entryPoint = document.querySelector(".cards")

// axios.get("https://api.github.com/users/Minakshi-Verma")
// .then(response=>{
//   console.log(response,"I am a flag for the axios response")
//   response.data.forEach(item => {
//     const newdata = card_creater(item);
    
//     const entryPoint = document.querySelector(".cards")
//     entryPoint.appendChild(newdata);
//   });
//   return newdata=>

// }) 

myArr.forEach(person =>{
  axios.get(`https://api.github.com/users/${person}`)
  .then(response => {
 
 entryPoint.append(cardCreater(response))
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
  
})





function cardCreater(obj){

  //---create all the elements---
  
        card = document.createElement("div");
        image = document.createElement("img");
        cardInfo = document.createElement("div");
        name = document.createElement("h3");
        username = document.createElement("p");
        location = document.createElement("p");
        profile = document.createElement("p");
        profileLink = document.createElement("a");
        followers = document.createElement("p");
        following = document.createElement("p");
        bio = document.createElement("p");

       //---append to parent

       card.append(image);
       card.append(cardInfo);
       cardInfo.append(name);
       cardInfo.append(username);
       cardInfo.append(location);
       cardInfo.append(profile);
       cardInfo.append(profileLink);
       cardInfo.append(followers);
       cardInfo.append(following);
       cardInfo.append(bio);

        //---add classnames

        card.classList.add("card");
        cardInfo.classList.add("card-info");
        name.classList.add("name");
        username.classList.add("username");

        //---add textContent----

        image.setAttribute("src", obj.data.avatar_url) ;
        name.textContent = obj.data.name;
        username.textContent = obj.data.login;
        location.textContent = obj.data.location;
        // profile.textContent = obj.data.url
            profile.textContent = "Profile: ";
            profileLink.href = obj.data.html_url;
            var text = document.createTextNode(obj.data.url);
            profileLink.append(text);
            profile.append(profileLink);


        followers.textContent = "Followers: " + obj.data.followers;
        following.textContent = "Following: " + obj.data.following;
        bio.textContent = "Bio: " + obj.data.bio; 

  return card
}


