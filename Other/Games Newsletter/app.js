class EventObserver {
    constructor() {
      this.observers = [];
    }
  
    subscribe(fn) {
      this.observers.push(fn);
      changeCSS(fn.name);
    }
  
    unsubscribe(fn) {
       this.observers = this.observers.filter(function(item){
        if(item !== fn) {
          return item;
        }
      });
      let newFnName = `un${fn.name}`;
      changeCSS(newFnName);
    }
  
    fire() {
      this.observers.forEach(function(item) {
        item.call();
      });
    }
  }
  
  
  const click = new EventObserver();
  const nlsSpan = document.querySelector('#sub-nls');
  let subNewsletters = [];
  const subBtnArray = ['subHitman', 'subStreetFighter', 'subTheCrew'];
  const unsubBtnArray = ['unsubHitman', 'unsubStreetFighter', 'unsubTheCrew'];

  // Add and Remove functions
  function pushToArray(item){
    if(!subNewsletters.includes(item)){
        subNewsletters.push(item);
    }
  }

  function removeFromArray(item){
    subNewsletters.splice(subNewsletters.indexOf(item),1);
  }
  
  
  // Event Listeners
  subBtnArray.forEach((item)=>{
    document.querySelector(`#${item}`).addEventListener('click', function() {
        if(item == 'subHitman'){
            click.subscribe(subHitman);
        }
        if(item == 'subStreetFighter'){
            click.subscribe(subStreetFighter);
        }
        if(item == 'subTheCrew'){
            click.subscribe(subTheCrew);
        }
        pushToArray(item.replace('sub', ''));
      });
  })


  unsubBtnArray.forEach((item)=>{
    document.getElementById(item).addEventListener('click', function() {
        if(item == 'unsubHitman'){
            click.unsubscribe(subHitman);
        }
        if(item == 'unsubStreetFighter'){
            click.unsubscribe(subStreetFighter);
        }
        if(item == 'unsubTheCrew'){
            click.unsubscribe(subTheCrew);
        }
        removeFromArray(item.replace('unsub', ''));
      });
  })


  // Fire function - Save Preferences
  document.querySelector('#fireBtn').addEventListener('click', function() {
    click.fire();

    let subscribedNLS = '';

    // Render subscribed Newsletters and remove last two characters (, )
    subNewsletters.forEach((item)=>{
        subscribedNLS += `${item}, `;
    });

    nlsSpan.textContent = subscribedNLS.slice(0, -2);

  });


  // Click Handler Runs after Fire
  const subHitman = () => {
    console.log(`You Joined Hitman Newsletter`);
  }
  
  const subStreetFighter = () => {
    console.log(`You Joined Street Fighter Newsletter`);
  }

  const subTheCrew = () => {
    console.log(`You Joined The Crew Newsletter`);
  }


  // Change css Class for Buttons
  function changeCSS(fnName){
    if(!fnName.includes('un')){
        document.querySelector(`#${fnName}`).classList.replace('btn-light', 'btn-success');
        document.querySelector(`#un${fnName}`).classList.replace('btn-danger', 'btn-light');
    }
    else {
        document.querySelector(`#${fnName}`).classList.replace('btn-light', 'btn-danger');
        document.querySelector(`#${fnName}`.replace('un','')).classList.replace('btn-success', 'btn-light');
    }
  }