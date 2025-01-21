const getTotalBalanceByGender = (users, gender) => 
    users.filter(user => user.gender === gender)
         .reduce((total, user) => total + user.balance, 0);
  
  console.log(getTotalBalanceByGender(clients, "male")); // 12053
  console.log(getTotalBalanceByGender(clients, "female")); // 8863