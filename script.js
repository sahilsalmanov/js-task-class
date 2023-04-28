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
//       this.name = name;
//       this.words = {};
//     }
  
//     add(word, description) {
//       if (!(word in this.words)) {
//         this.words[word] = {
//           word: word,
//           description: description,
//         };
//       }
//     }
  
//     remove(word) {
//       delete this.words[word];
//     }
  
//     get(word) {
//       return this.words[word];
//     }
  
//     showAllWords() {
//       for (const word in this.words) {
//         console.log(`${word} - ${this.words[word].description}`);
//       }
//     }
//   }
  
//   const dictionary = new Dictionary('Explanatory Dictionary')
//   dictionary.add('JavaScript', 'popular programming language')  
//   dictionary.add('Web developer', 'A person who creates new services and sites or maintains and complements existing ones')
//   dictionary.remove('JavaScript')
//   dictionary.showAllWords()



//Class task 5

// class HardWordsDictionary extends Dictionary {
//     constructor(name) {
//       super(name);
//     }
  
//     add(word, description) {
//       const obj = {
//         word: word,
//         description: description,
//         isDifficult: true
//       };
  
//       if (!this.words[word]) {
//         this.words[word] = obj;
//       }
//     }
//   }

//   const hardWordsDictionary = new HardWordsDictionary("Hard words");
// hardWordsDictionary.add("amateur","One who practices science or art without special training, having only a superficial knowledge."
// );
// hardWordsDictionary.add("neologism", "A new word or expression, as well as the new meaning of the old word."
// );
// hardWordsDictionary.add("quantum","The indivisible part of some quantity in physics."
// );

// hardWordsDictionary.remove("neologism");
// hardWordsDictionary.showAllWords();


  


//Class task 6
// class Dictionary {
//     #name;
//     #words;
  
//     constructor(name) {
//       this.#name = name;
//       this.#words = {};
//     }
  
//     get mainName() {
//       return this.#name;
//     }
  
//     set setMainName(newName) {
//       this.#name = newName;
//     }
  
//     get allWords() {
//       return this.#words;
//     }
  
//     addNewWord(word, description) {
//       this.#words[word] = description;
//     }
  
//     remove(word) {
//       delete this.#words[word];
//     }
  
//     showAllWords() {
//       console.log(this.#words);
//     }
//   }
  
//   class HardWordsDictionary extends Dictionary {
//     constructor(name) {
//       super(name);
//     }
  
//     add(word, description) {
//       const isHard = word.length >= 10;
//       if (isHard) {
//         this.addNewWord(word, description);
//       }
//     }
//   }
  
//   const hardWordsDictionary = new HardWordsDictionary("Difficult words");
//   hardWordsDictionary.add("amateur", "One who practices science or art without special training, having only a superficial knowledge.");
//   hardWordsDictionary.add("neologism", "A new word or expression, as well as the new meaning of the old word.");
//   hardWordsDictionary.add("quantum", "The indivisible part of some quantity in physics.");
//   hardWordsDictionary.remove("neologism");
//   hardWordsDictionary.showAllWords();
//   console.log(hardWordsDictionary.mainName);
//   hardWordsDictionary.setMainName = "New Dictionary";
//   console.log(hardWordsDictionary.mainName); 
//   console.log(hardWordsDictionary.allWords); 
  






//Class task 7
// class Developer {
//     constructor(fullName, age, position = 'Developer') {
//       this.fullName = fullName;
//       this.age = age;
//       this.position = position;
//       this.technologies = [];
//     }
  
//     code() {}
  
//     learnNewTechnology(technology) {
//       this.technologies.push(technology);
//     }
//   }
  
//   class JuniorDeveloper extends Developer {
//     constructor(fullName, age) {
//       super(fullName, age, 'Junior');
//       this.technologies = ['HTML', 'CSS', 'JavaScript'];
//     }
  
//     code() {
//       console.log('Junior developer is writing code...');
//     }
//   }
  
//   class MiddleDeveloper extends Developer {
//     constructor(fullName, age) {
//       super(fullName, age, 'Middle');
//       this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
//     }
  
//     code() {
//       console.log('Middle developer is writing code...');
//     }
//   }
  
//   class SeniorDeveloper extends Developer {
//     constructor(fullName, age) {
//       super(fullName, age, 'Senior');
//       this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
//     }
  
//     code() {
//       console.log('Senior developer is writing code...');
//     }
//   }

  
// const juniorDeveloper = new JuniorDeveloper('Anastasia', 20);
// const middleDeveloper = new MiddleDeveloper('Igor', 25);
// const seniorDeveloper = new SeniorDeveloper('Maxim', 30);

// juniorDeveloper.code(); 
// middleDeveloper.code(); 
// seniorDeveloper.code(); 

// console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position); 
// console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position); 
// console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position); 








