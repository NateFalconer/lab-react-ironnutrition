import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox'

class App extends Component {


  state = {
    foods: foods,
    allFoods: foods,
    foodForm:false

  }
//  old code, redone for iteration 3
// state = {
//   AllFood: foods,
//   foodForm:false
// }

// showFoods = () => {
//   let AllFood = [...foods]
//   return this.state.AllFood.map(eachFood => {
//     return (
//       <FoodBox name={eachFood.name} calories={eachFood.calories} image={eachFood.image} />
//     )
//   })
// }

showFoods = () => {
  let foodList = this.state.foods.map((eachFood,i)=>{
    return <FoodBox key = {i} {...eachFood} />
  })
  return foodList;
}


handleFormSubmit = (e) => {
  e.preventDefault()
  this.toggleFoodForm()
  let newFoods = [...this.state.foods]
  newFoods.unshift({
    name:this.state.food,
    calories:this.state.calories,
    quantity:1,
    image:this.state.image,
  })


  this.setState({
    foods:newFoods,
    allFoods:newFoods,
  })
}


toggleFoodForm = () => {
  this.setState({
    foodForm: !this.state.foodForm
  })
}

handleInputChange = (e) => {
  this.setState({ 
    [e.target.name]: e.target.value 
  }) 
}

showFoodForm = () => {
  if(this.state.foodForm){
    return (
      <form onSubmit={this.handleFormSubmit}>
          <input name="food" onChange={this.handleInputChange} type="text" placeholder="food name"/>
          <input name="calories" onChange={this.handleInputChange} type="text" placeholder="calories"/>
          <input name="image" onChange={this.handleInputChange} type="text" placeholder="image"/>
        <input  type="submit" />
      </form>
      )
    } else {
      return <button onClick={this.toggleFoodForm}>Add New Food</button>
    }
  }

searchFood = (e) => {
  let newFoods = [...this.state.allFoods]
  let filteredFoods = newFoods.filter(eachFood => {
    return eachFood.name.toLowerCase().includes(e.target.value.toLowerCase())
  })
  this.setState({
    foods:filteredFoods
  })
}

todaysFood = () => {
  return (
      <div class="column1">
      <div>
      Today's Foods
      </div>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      </div>
  )
}

// addTodayFood = (e) => {
//   return (
//       <div class="column1">
//       <div>
//       Today's Foods
//       </div>
//       <tr></tr>
//       <tr></tr>
//       <tr></tr>
//       </div>
//   )
// }


  render() {
    return (
      <div class="App">
        <h1>IronNutrition</h1>
        <input type="text" placeholder="Search.." name="search" onChange={this.searchFood} />
        <br></br>
        {this.showFoodForm()}
        <br></br>

        {this.showFoods()}
      </div>
    );
  }
}

export default App;
