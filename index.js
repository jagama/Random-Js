  //SPREAD OPERATOR TO COPY AN ARRAY //

/* const fewFruit = ['apple', 'orange', 'mango']
const fewMoreFruit = ['melon', 'watermelon', ...fewFruit]
console.log(fewMoreFruit) 
console.log(fewFruit) */




// FUNCTION TO CREATE A NEW PERSON //

/* function person (name, age){
    this.name = name
    this.age = age
}
let pers = new person('luca', 22)

console.log(pers) */




// FUNCTION AS PARAMETER //

//passare una funzione come parametro
/* function foo(param) {
    console.log(param);
}

function boo(incoming) {
    incoming('Hello World');
}

boo(foo); */




// FOR OF LOOP //

/* const fruits = ['mango', 'peach', 'banana']
for(let fruit of fruits){
console.log(fruit)} */




// ARROW FUNCTION //

/* const square = number => number * number;

console.log(square(4));
 */





 // CLASS AND CONSTRUCTOR // 

/*class plane {
    constructor(company, model, number){
        this.company = company;
        this.model = model;
        this.number = number;
    }

    fly(){
        let dir = Math.floor(Math.random()*2);
        return dir;
    }
}

let airbus = new plane('easy', 'a320', 5542);
let boeing = new plane('lufthansa', 'b747', 4387);

let play = () => {
    if(airbus.fly() === boeing.fly()){
        return 'collisione';
    }
    return 'tutto bene';
}

console.log(play());*/





// OTHER CLASS EXAMPLE BELOW:

/* class submariner{
    constructor(classe, engine, life, profondita){
        this.class = classe;
        this.engine = engine;
        this.life = life;
        this.profondita = profondita;
    }

    dive(immersione){
        const mt =  this.profondita + immersione;
        if(mt < 400){
            this.profondita = mt;
            return this.profondita;
        }
        return ' non puoi immergerti più di 400 mt'
    }

    getProfondita(){
        return this.profondita;
    }

    risali(metri){
        const control = this.profondita - metri;
        if(control >= 0){
            this.profondita = control;
            return control
        }
        return ' non puoi risalire più di zero'
    }

    attack(obj){
        const damage = Math.floor(Math.random()*10);
        let newLife = obj.life - damage;
        obj.life = newLife;
        return obj.life;
    }
}

let sottomarino = new submariner('torpedo', 'atomico', 100, 0);
let sottomarino2 = new submariner('stack', 'diesel', 100, 0);


sottomarino.dive(200);
console.log(sottomarino.getProfondita());
sottomarino.attack(sottomarino2);
console.log(sottomarino2.life);
sottomarino.attack(sottomarino2);
console.log(sottomarino2.life); */




// PROMISE //

/* const flag = true;
const myPromise = new Promise((resolve, reject) =>{ //fat arrow
       if(flag){
         let value = {color:'tomato'}
         resolve(value) //resolved
       }else{
         let err = new Error('flag was false')
         reject(err) //rejected
       }
});

//consume myPomise
const test = () => {
  myPromise
  	.then(isFulfilled => {
    console.log(isFulfilled)
  })
  .catch(function(error){
    console.log('Qualcosa è andato storto ' + error)
  })
}
test() */




// PROMISE OTHER EXAMPLE BELOW
/*
const fareSpesa  = () => {
    return new Promise((resolve, reject) => {
       setTimeout(function() {
         resolve( console.log('spesa fatta'));
       }, 2000);
    });
 };


 const cucinare = () => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve(console.log('cucinato'));
       }, 6000);
    });
 };

 const vedereTv  = () => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve(console.log('sei alla tv'));
       }, 2000);
    });
 };

 fareSpesa()
    .then(cucinare)
    .then(vedereTv);
*/




// PROMISE OTHER EXAMPLE BELOW
/* 
function doubleUp(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }
  
  function addPromise(x){
    return new Promise(resolve => {
      doubleUp(10)
        .then((a) => {
        doubleUp(20)
            .then((b) => {
          doubleUp(30)
                .then((c) => {
                    resolve(x + a + b + c);
                })
            })
        })
    });
  }
  
  addPromise(60).then((sum) => {
    console.log(sum);
  });  */

  


  
//ASYNC - AWAIT 


/* function doubleUp(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }
  
  async function addAsync(x) {
    const a = await doubleUp(10);
    const b = await doubleUp(20);
    const c = await doubleUp(30);
    return x + a + b + c;
  }
  
  
  addAsync(10).then((sum) => {
    console.log(sum);
  });  */

////////////// END ////////////////