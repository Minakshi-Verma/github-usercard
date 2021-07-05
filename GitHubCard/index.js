

//step-1 creating .get request and check if it is working

const myArr = [ 
  "jasheloper",
  "Keyeric",
  "lgv-0",
  "tatek1993",
  "Dlray89",
  
  "alexvision26"

]


entryPoint = document.querySelector(".cards")

// axios.get("https://api.github.com/users/Minakshi-Verma")
// .then(response=>{
//   console.log(response)
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
  
      const card = document.createElement("div");
      const image = document.createElement("img");
      const cardInfo = document.createElement("div");
      const name = document.createElement("h3");
      const username = document.createElement("p");
      const location = document.createElement("p");
      const profile = document.createElement("p");
      const profileLink = document.createElement("a");
      const followers = document.createElement("p");
      const following = document.createElement("p");
      const bio = document.createElement("p");

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
        profile.textContent = obj.data.url
            // profile.textContent = "Profile: ";
            // profileLink.href = obj.data.html_url;
            // var text = document.createTextNode(obj.data.url);
            // profileLink.append(text);
            // profile.append(profileLink);

            followers.textContent = "Followers: " + obj.data.followers;
            following.textContent = "Following: " + obj.data.following;
            bio.textContent = "Bio: " + obj.data.bio; 

  return card
}


