import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox'

class App extends Component {


  state = {
    foods,
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
    foods:newFoods
  })
}


toggleFoodForm = () => {
  this.setState({
    foodForm: !this.state.foodForm
  })
}

handleInputChange = (e) => {
  console.log('change', e.target.name, e.target.value)
  this.setState( { [e.target.name] : e.target.value } ) 
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

  render() {
    return (
      <div class="App">
        <h1>IronNutrition</h1>
        <br></br>
        {this.showFoodForm()}
        <br></br>


        {this.showFoods()}
      </div>
    );
  }
}

export default App;
