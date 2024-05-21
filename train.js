const list1 = [
    "Yaxshi talaba bo'ling", //0-20
    "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
    "endi dam oling, endi foydasi yoq" //60+
];
// function maslahatBering(a, callback){
//     if(typeof a != 'number') callback("Xatolik!!!", null);
//     else if(a<=20) callback(null, list1[0]);
//     else if(a>20 && a<=30) callback(null, list1[1]);
//        else{
//         setTimeout(function(){
//             callback(null, list1[2])
//         },2000);
//        }
// }
// maslahatBering(88,(err, data) => {
//     if(err) console.log("XATOLIK!!!", err);
//     console.log("JAVOB:", data)
// })









// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.
const list = ['engineer'];

function countLetter(a, callback){
    let count = 0;
    let b = list[0];
    for(let i=0; i<=b.length; i++){
        if(a === b[i]){
            count++;
            c = count;
        }
       
    }
    callback(null, c)
}
countLetter('e', (err, data) => {
    console.log(data)
});

// const list1 = [
//     "Yaxshi talaba bo'ling", //0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//     "endi dam oling, endi foydasi yoq" //60+
//];
//  async function maslahatBering(a){
//     if(typeof a != 'number') throw new Error("Xatolik!!!");
//     else if(a<=20) return(null, list1[0]);
//     else if(a>20 && a<=30) return(list1[1]);
//        else{
//         return  new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list1[2]);
//             },5000)
//         })
//     }
//        }

//then//catch
// maslahatBering(25)
// .then((data) => {
//     maslahatBering(30)
// .then((data) => {
//     maslahatBering(67)
// .then((data) => {
//     console.log("Javob = ",data);
// })
// .catch((err) => {
//     console.log("Xatolik", err);
// })
//     console.log("Javob = ",data);
// })
// .catch((err) => {
//     console.log("Xatolik", err);
// })
//     console.log("Javob = ",data);
// })
// .catch((err) => {
//     console.log("Xatolik", err);
// })

// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();