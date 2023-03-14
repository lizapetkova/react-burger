import cn from 'classnames';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientStyles from './burger-ingredient.module.css';
import React from "react";
import {IngredientDetails} from "../ingredient-details/ingredient-details";

export class BurgerIngredient extends React.Component {
  state = {
    isOpenModal: false,
  };

  handleOpenModal = () => {
    this.setState({isOpenModal: true});
  }

  handleCloseModal = () => {
    this.setState({isOpenModal: false});
  }


  render() {
    let {ingredient, count} = this.props;

    return (
        <>
          <li className={burgerIngredientStyles.card} onClick={this.handleOpenModal}>
            <img className='p-4' src={ingredient.image} alt={ingredient.name}/>
            {
              count > 0 ? <Counter count={count} size="default" extraClass="m-1"/> : null
            }
            <div className={burgerIngredientStyles.card__price}>
              <span className='text text_type_digits-default'>{ingredient.price}</span>
              <CurrencyIcon type="primary"/>
            </div>
            <span className={cn(burgerIngredientStyles.card__name, 'text text_type_main-default')}>
          {ingredient.name}
          </span>
          </li>
          {this.state.isOpenModal && <IngredientDetails ingredient={ingredient} onClose={this.handleCloseModal}/>}
        </>

    );
  }
}
