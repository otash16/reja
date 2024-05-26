
// const list1 = [
//     "Yaxshi talaba bo'ling", //0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//     "endi dam oling, endi foydasi yoq" //60+
// ];
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









// // A-TASK: 

// // Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// // MASALAN countLetter("e", "engineer") 3ni return qiladi.
// const list = ['engineer'];

// function countDigits(str1, callback){
//     let count = 0;
//     for(let i=0; i<=str1.length; i++){
//         if(str1[i] >= 0){
//             count++;
//         }
//     }
//     callback(null, count)
// }
// countDigits('ad2a54y79wet0sfgb9', (err, data) => {
//     console.log(data)
// });

// const list1 = [
//     "Yaxshi talaba bo'ling", //0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//     "endi dam oling, endi foydasi yoq" //60+
// ];
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

// then//catch
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

class Shop {
    constructor(non, lagmon, cola) {
        this.products = {
            non: non,
            lagmon: lagmon,
            cola: cola
        };
    }

    moment() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return {
            format: () => `${hours}:${minutes}`
        };
    }

    qoldiq() {
        const time = this.moment().format();
        const { non, lagmon, cola } = this.products;
        return `Hozir ${time}da ${non}ta non, ${lagmon}ta lagmon va ${cola}ta cola mavjud!`;
    }

    sotish(product, amount) {
        const time = this.moment().format();
        if (this.products[product] !== undefined && this.products[product] >= amount) {
            this.products[product] -= amount;
            console.log(`Hozir ${time}da ${amount}ta ${product} sotildi!`);
        } else {
            console.log(`Hozir ${time}da ${product} yetarli emas yoki mavjud emas!`);
        }
    }

    qabul(product, amount) {
        const time = this.moment().format();
        if (this.products[product] !== undefined) {
            this.products[product] += amount;
            console.log(`Hozir ${time}da ${amount}ta ${product} qabul qilindi!`);
        } else {
            console.log(`Hozir ${time}da ${product} mavjud emas!`);
        }
    }
}

// Misol uchun ishlatish:
const shop = new Shop(4, 5, 2);
console.log(shop.qoldiq()); // hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
shop.sotish('non', 3); // hozir 20:40da 3ta non sotildi!
shop.qabul('cola', 4); // hozir 20:40da 4ta cola qabul qilindi!
console.log(shop.qoldiq()); // hozir 20:40da 1ta non, 5ta lagmon va 6ta cola mavjud!
