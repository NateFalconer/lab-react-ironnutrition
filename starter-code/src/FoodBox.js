import React, { Component } from 'react';

class FoodBox extends Component {
    

    // addTodayFood = () => {
    //     return (
    //         <div class="column1">
    //         <div>
    //         Today's Foods
    //         </div>
    //         <tr></tr>
    //         <tr></tr>
    //         <tr></tr>
    //         </div>
    //     )
    //   }
    
    render() {
        return (
            <div>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.image} alt={this.props.imageName}/>
                        </figure>
                        </div>
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{this.props.name}</strong> <br />
                            <small>{this.props.calories}</small>
                            </p>
                        </div>
                        </div>
                        <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                            <input
                                className="input"
                                type="number" 
                                value="1"
                            />
                            </div>
                            <div className="control">
                            <button onClick={() => this.addTodayFood()} className="button is-info">
                                +
                            </button>
                            </div>
                        </div>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default FoodBox;