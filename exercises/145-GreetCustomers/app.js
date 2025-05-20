let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let visits = 0;
  if(Object.keys(customerData).includes(firstName)) {
    visits = customerData[firstName].visits;
  }
  if (visits === 0)  {
    return "Welcome! Is this your first time?" 
  }

  else if (visits === 1 ) {
    return `Welcome back, ${firstName}! We're glad you liked us the first time!`
  }

  else {
    return `Welcome back, ${firstName}! So glad to see you again!`
  }
	
}

console.log(greetCustomer('Joe')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
