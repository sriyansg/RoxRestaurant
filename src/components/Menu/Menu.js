import React from 'react';
import './Menu.scss'

const Menu = ({ menuData }) => {

  return (
    <div className='menu'>
      {/*menu categories */}
      <div className='categories'>
        <h1>Categories</h1>
        {menuData.categories.map((category, index) => (
          <div key={index} className='category'>
            <h3>{category.name}</h3>
            <div className='items'>
              {/* menu items for each category */}
              {category.items.map((item, i) => (
                <div key={i} className='item'>
                  <div className='top'>
                    <img src={item.photo} alt="item" />
                  </div>
                  <div className='bottom'>
                    <div className='title'>
                      <h3>{item.name}</h3>
                      <h3>{item.price}</h3>
                    </div>
                    <p>{item.description}</p>
                    <p><strong>Ingredients:</strong> {item.ingredients.join(', ')}</p>
                    <p><strong>Nutritional Info:</strong> Calories - {item.nutritional_info.calories}, Protein - {item.nutritional_info.protein}g, Carbs - {item.nutritional_info.carbohydrates}g, Fat - {item.nutritional_info.fat}g</p>
                    <p><strong>Seasonal Availability:</strong> {item.seasonal_availability.join(', ')}</p>

                    {/* customizable options exist */}
                    {item.customizable_options && (
                      <p><strong>Customizable Options:</strong> {item.customizable_options.join(', ')}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Display seasonal menu */}
      <div className='seasonal'>
        <h1>Seasonal</h1>
        <h3>{menuData.seasonal_menu.name}</h3>
        <div className='items'>
          {/* Display seasonal menu items */}
          {menuData.seasonal_menu.items.map((item, i) => (
            <div key={i} className='item'>
              <div className='top'>
                <img src={item.photo} alt="item" />
              </div>
              <div className='bottom'>
                <div  className='title'>
                  <h3>{item.name}</h3>
                  <h3>{item.price}</h3>
                </div>
                <p>{item.description}</p>
                <p><strong>Nutritional Info:</strong> Calories - {item.nutritional_info.calories}, Protein - {item.nutritional_info.protein}g, Carbs - {item.nutritional_info.carbohydrates}g, Fat - {item.nutritional_info.fat}g</p>
                <p><strong>Seasonal Availability:</strong> {item.seasonal_availability.join(', ')}</p>

                {/* Check if customizable options exist */}
                {item.customizable_options && (
                  <p>Customizable Options: {item.customizable_options.join(', ')}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
