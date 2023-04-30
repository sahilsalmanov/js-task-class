//class-task1

// class Student {
//     constructor(name,age) {

//     this.name = name;
    
//     this.age = age;
    
//     this.technologies = [];
    
//     this.status = 'Junior'
    
//     this.setTechnologies = function(technologies) {
    
//     this.technologies = [
    
//     ...this.technologies,
    
//     ...technologies,  
//     ];   
//     }
//     this.setNewStatus = function(newStatus) {
    
//     this.status = newStatus;
//     }
    
//     }
// }
    
//     const student = new Student('Maxim', 20);
    
//     student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
    
//     student.setNewStatus('Middle');
    
//     console.log(student);




//class-task2

// class Person {
//     constructor(name,age) {
//         this.name = name
//         this.age = age
//     }
//     compareAge(second) {
//      if(this.age >= second.age) {
//         alert(`${this.name} is older than ${second.name}`)
//      }
//      else {
//         alert(`${this.name} is younger than ${second.name}`)
//      }
//     }
// }


// const person1 = new Person('Maxim',24);
// const person2 = new Person('Svetlana', 36);
// const person3 = new Person('Irina', 23);

// person1.compareAge(person2); 
// person2.compareAge(person3); 
// person3.compareAge(person1); 



//class-task3

// class CarService {
//     static DefaultWorkingHours = {
//         from: '9:00',
//         till: '20:00'
//     }
//     constructor(name,workingHours) {
//         this.name = name
//         this.workingHours = workingHours || this.DefaultWorkingHours
//     }
//     repairCar(carName) {
//       this.carName = carName
      

//       if(carName) {
//         if(this.workingHours) {
      
//             let currDate = new Date();
//             let hoursMin = currDate.getHours()
            
//             let from = this.workingHours.from.split('')
//             let from2 = []
//             for(let item of from) {
//                if(item != ':') {
//                 from2.push(item)
//                }
//                else {
//                 break;
//                }
//             }
//             let fromString = from2.join('')
//             let fromNumber = Number(fromString)
            
            
//             let till = this.workingHours.till.split('')
//             let till2 = []
//             for(let item of till) {
//                if(item != ':') {
//                 till2.push(item)
//                }
//                else {
//                 break;
//                }
//             }
            
//             let tillString = till2.join('')
//             let tillNumber = Number(tillString)
            
//             if(hoursMin < tillNumber && hoursMin > fromNumber) {
//                 alert(`Now we will repair your car ${carName}! Please wait! `)
//             }
//             else {
//                 alert('Unfortunately, we are closed now. Come back tomorrow')
//             }
//                   }
//                   else {
//                         let currDate = new Date();
//                         let hoursMin = currDate.getHours()
//                         if(hoursMin < 20 && hoursMin > 9) {
//                            alert(`Now we will repair your car ${carName}! Please wait! `)
//                         }
//                         else {
//                             alert('Unfortunately, we are closed now. Come back tomorrow')
//                         }
                    
                              
//                   }
//       }
//       else {
//         alert('You need to specify the name of the car in order to repair it')
//       }
      

//     }
// }

// const company = new CarService('RepairCarNow',{from:'8:00', till: '18:00'})
// company.repairCar()





//class-task4

// class Dictionary {
//     constructor(name) {
//     this.name = name
//     this.words = {}
//     }
//     add(word,description) {
//         let obj = {
//             word: word,
//             description: description
//         }
//      this.words[word] = obj
//     }
//     remove(removingWord) {
//     delete this.words[removingWord]
//     }
//     get(gettingWord) {
//     console.log(this.words[gettingWord])
//     }
//     showAllWords() {
//         let values = Object.values(this.words)
//         let keys = Object.keys(this.words)
//         for(let i=0;i<values.length;i++) {
//            console.log(keys[i] + "-" + values[i].description)
//         }
//     }

// }

// const dictionary = new Dictionary('Explanatory Dictionary');
// dictionary. add('JavaScript', 'popular programming language');
// dictionary.add('Web developer', 'A person who creates new services and sites or maintains andsupplements existing ones');
// dictionary.remove('JavaScript');
// dictionary.showAllWords();


//class-task5

// class HardWordsDictionary extends Dictionary {
//       constructor(name) {
//         super(name)
//         this.words = {}
//       }
//       add(word,description) {
//         let obj = {
//             word: word,
//             description: description,
//             isDifficult: true
//         }
//        this.words[word] = obj
//       }
// }



//class-task6

// class HardWordsDictionary extends Dictionary {
//       constructor(name) {
//         super(name)
//         this.words = {}
//       }
//       add(word,description) {
//         let obj = {
//             word: word,
//             description: description,
//             isDifficult: true
//         }
//        this.words[word] = obj
//       }
//       mainName() {
//         let values = Object.values(this.words)
//         let keys = Object.keys(this.words)
//         for(let i=0;i<values.length;i++) {
//            console.log(keys[i] + "-" + values[i].description)
//         }
//     }
// }


// const hardWordsDictionary = new HardWordsDictionary('Hard words');
// hardWordsDictionary.add('amateur', 'One who practices science or art without special training, havingonly a superficial knowledge.');
// hardWordsDictionary.add('neologism', 'A new word or expression, as well as the new meaning of the old word.');
// hardWordsDictionary.add('quantum', 'The indivisible part of some quantity in physics.');
// hardWordsDictionary.remove('neologism');
// hardWordsDictionary.mainName()


//class-task7

// class Developer {
//     technology = []
//     constructor(fullName,age,position) {  
//         this.fullName = fullName,
//         this.age = age,
//         this.position = position
//     }
//     code() {

//     }
//     learnNewTechnology() {

//     }
// }

// class JuniorDeveloper extends Developer {
//     constructor(fullName,age) {
//       super(fullName,age)
//       this.position = 'Junior'
//     }
//     code() {
//         console.log('Junior developer is writing code ...')
//     }
//     learnNewTechnology() {
//     this.technology = ['HTML','CSS','JavaScript']
//     }
// }

// let juniorSahil = new JuniorDeveloper('Sahil',20)
// juniorSahil.learnNewTechnology()




// class MiddleDeveloper extends Developer {
//     constructor(fullName,age) {
//       super(fullName,age)
//       this.position = 'Middle'
//     }
//     code() {
//         console.log('Middle developer is writing code ...')
//     }
//     learnNewTechnology() {
//     this.technology = ['HTML','CSS','JavaScript','React']
//     }
// }

// let middleSahil = new MiddleDeveloper('Sahil',20)
// middleSahil.learnNewTechnology()



// class SeniorDeveloper extends Developer {
//     constructor(fullName,age) {
//       super(fullName,age)
//       this.position = 'Senior'
//     }
//     code() {
//         console.log('Senior developer is writing code ...')
//     }
//     learnNewTechnology() {
//     this.technology = ['HTML','CSS','JavaScript','NodeJS']
//     }
// }

// let seniorSahil = new SeniorDeveloper('Sahil',20)
// seniorSahil.learnNewTechnology()
// juniorSahil.code()
// middleSahil.code()
// seniorSahil.code()
// console.log(juniorSahil.fullName, juniorSahil.age, juniorSahil.position)
// console.log(middleSahil.fullName, middleSahil.age, middleSahil.position)
// console.log(seniorSahil.fullName, seniorSahil.age, seniorSahil.position)





