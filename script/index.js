const loadLessons=() =>{
    fetch("https://openapi.programming-hero.com/api/levels/all") // promise of respons
    .then((res)=> res.json()) //promise of json data
    .then((json) => displayLesson(json.data))

};
const loadLevelWord = (id) => {
    console.log("Level ID:", id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log("Level Data:", data);
            // ✅ এখন এখানে data.data.words পাঠাও displayLevelWord() এ
            displayLevelWord(data.data);
        })
        .catch((error) => console.error(error));
};

const displayLevelWord=(words) =>{
       const wordContainer = document.getElementById("word-container")
       wordContainer.innerHTML = "";


         if(words.length == 0){
             wordContainer.innerHTML = `<div class="justify-between bg-sky-100 items-center text-center  col-span-full rounded-xl py-10 space-y-6 font-bangla">
    <p class="text-xl font-medium text-gray-400">আপনি এখনো কোন Lesson Select করেন নি</p>
    <h2 class="font-bold text-4xl ">নেক্সট Lesson এ যান</h2>
</div>`;
            alert("no word detected");
            return;
         }

       words.forEach((word) => {
        console.log(word);
        const card = document.createElement("div");
         card.innerHTML = `<div class="bg-white  rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
        <h2 class="font-bold text-2xl">${word.word}</h2>
        <p class="font-semibold">Meaning /Pronounciation</p>
        <div class="text-xl font-medium font-bangla">
             "${word.meaning}/ ${word.pronunciation}"
        </div>
        <div class="flex justify-between items-center">
            <button class="btn bg-[#1A91FF10] hover:bg-[#188dfa80]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn  bg-[#1A91FF10]  hover:bg-[#188dfa80]"><i class="fa-solid fa-volume-high"></i>
            </button>
        </div>

    </div>`;
        
    // 🟢 নতুন এই লাইন
    wordContainer.append(card);
       });

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
         <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
         <i class=" fa-solid fa-circle-question"></i>LESSON - ${lesson.level_no}
         </button>


 `;
                        
    // 4.append into container


    levelContainer.append(btnDiv); 

    }
   





     
};























loadLessons();