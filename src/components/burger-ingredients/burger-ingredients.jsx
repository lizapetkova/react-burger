import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {loadIngredients, selectIngredientGroup} from '../../services/actions/burger-ingredients';
import {clearSelectedIngredient} from '../../services/actions/selected-ingredient';
import {IngredientGroup} from '../ingredient-group/ingredient-group';
import {IngredientDetails} from '../ingredient-details/ingredient-details';
import {Modal} from '../modal/modal';
import {Loader} from '../loader/loader';
import {ErrorMessage} from '../error-message/error-message';
import burgerIngredientsStyles from './burger-ingredients.module.css';

export const BurgerIngredients = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredients())
  }, [dispatch])

  const {ingredients, isLoading, error, selectedGroup, selectedIngredient} = useSelector(store => ({
    ingredients: store.burgerIngredients.ingredients,
    isLoading: store.burgerIngredients.isLoading,
    error: store.burgerIngredients.error,
    selectedGroup: store.burgerIngredients.selectedGroup,
    selectedIngredient: store.selectedIngredient.ingredient,
  }))

  const bun = useMemo(() => ingredients.filter(ingredient => ingredient.type === 'bun'), [ingredients]);
  const main = useMemo(() => ingredients.filter(ingredient => ingredient.type === 'main'), [ingredients]);
  const sauce = useMemo(() => ingredients.filter(ingredient => ingredient.type === 'sauce'), [ingredients]);

  function handleClickTab(value) {
    dispatch(selectIngredientGroup(value));
    const title = document.getElementById(value);
    if (title) title.scrollIntoView({behavior: 'smooth'});
  }

  return (
      <>
        <section className={burgerIngredientsStyles.section}>
          {
              isLoading && <Loader/>
          }
          {
              !isLoading && error && <ErrorMessage message={error}/>
          }
          {
              !isLoading && !error &&
              <>
                <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
                <div className={cn(burgerIngredientsStyles.tab, 'mb-10')}>
                  <Tab value='bun' active={selectedGroup === 'bun'} onClick={handleClickTab}>
                    Булки
                  </Tab>
                  <Tab value='sauce' active={selectedGroup === 'sauce'} onClick={handleClickTab}>
                    Соусы
                  </Tab>
                  <Tab value='main' active={selectedGroup === 'main'} onClick={handleClickTab}>
                    Начинки
                  </Tab>
                </div>
                <div className={cn(burgerIngredientsStyles.scroll, 'custom-scroll')}>
                  <IngredientGroup title='Булки' ingredients={bun} id='bun'/>
                  <IngredientGroup title='Соусы' ingredients={sauce} id='sauce'/>
                  <IngredientGroup title='Начинки' ingredients={main} id='main'/>
                </div>
              </>
          }
        </section>

        {selectedIngredient &&
            <Modal title={'Детали ингредиента'} onClose={() => dispatch(clearSelectedIngredient())}>
              <IngredientDetails ingredient={selectedIngredient}/>
            </Modal>}
      </>
  );
}
