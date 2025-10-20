const loadLessons=() =>{
    fetch("https://openapi.programming-hero.com/api/levels/all") // promise of respons
    .then((res)=> res.json()) //promise of json data
    .then((json) => displayLesson(json.data))

};
const displayLesson = (lessons) => {
    // 1.get the container & empty
    const levelContainer = document.getElementById("level-container");   
    levelContainer.innerHTML = "";
    //  2.get into evey lessons
    for(let lesson of lessons){
         // 3.create Element
         console.log(lessons);
         const btnDiv = document.createElement("div")
         btnDiv.innerHTML = `
         <button class="btn btn-outline btn-primary">
         <i class=" fa-solid fa-circle-question"></i>LESSON - ${lesson.level_no}
         </button>


 `;
                        
    // 4.append into container


    levelContainer.append(btnDiv); 

    }
   





     
};
loadLessons();