import React, {useState} from 'react'
import './App.css';

const catalogInitial = [
  {
    iName: 'mango',
    description: 'yellow',
    price: 10.0
  },
  {
    iName: 'banana',
    description: 'yellow',
    price: 9.0
  },
  {
    iName: 'grape',
    description: 'green',
    price: 8.0
  }
]

const App = () => {
  const [catalog, setCatalog] = useState(catalogInitial);
  const [cart, setCart] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const addToCatalog = () => {
    let addNewItem = {
      iName: itemName,
      description: itemDescription,
      price: itemPrice
    }
    let updatedCatalog = catalog.concat(addNewItem);

    setCatalog(updatedCatalog);
  }

  const addToCart = (addItem) => {
    let addNewCart = {
      iName: addItem.iName,
      description: addItem.description,
      price: addItem.price
    }
    let updatedCart = cart.concat(addNewCart);

    setCart(updatedCart);
  }

  return (
    <div className = "main">

      <div className = "catalog">
        <div>
          <h1>Catalog</h1>
        </div>
        <div>
          {(typeof catalog === 'undefined')? (
            <p>No items</p>
          ): (
            catalog.map((addItem) => (
              <>
              <h1> {addItem.iName}</h1>
              <h2> {addItem.description}</h2>
              <h2> {addItem.price}</h2>
              <button >+</button>
              </>
            ))
          )}
        </div>
      </div>



      <div className = "cart">
        <div>
          {(typeof catalog === 'undefined')? (
            <p>No items</p>
          ): (
            cart.map((item) => (
              <>
              <h1> {item.iName}</h1>
              <h2> {item.description}</h2>
              <h2> {item.price}</h2>
              <button>-</button>
              </>
            ))
          )}
        </div>
      </div>

      <div className = "admin">
          <div>
            <h1>Add new item</h1>
            <h2>Name</h2>
            <input type="text" value = {itemName} onChange = {(e) => setItemName(e.target.value)} />
            <h2>Description</h2>
            <input type="text" value = {itemDescription} onChange = {(e) => setItemDescription(e.target.value)} />
            <h2>Price</h2>
            <input type="text" value = {itemPrice} onChange = {(e) => setItemPrice(e.target.value)} />
            <button type="button" onClick={addToCatalog}>Add</button>
          </div>
      </div>

    </div>
  )
}

export default App