import { useEffect, useState } from "react";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
        setProducts(loadedProducts);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const requestAddPost = () => {
    setIsCreating(true);

    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setProducts([...products, response]);
        console.log("Статья добавлена, ответ сервера: ", response);
      })
      .finally(() => setIsCreating(false));
  };

  return (
    <div>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        products.map(({ id, title }) => (
          <div className="todoitem" key={id}>
            {id} - {title}
          </div>
        ))
      )}
    </div>
  );
};

export default App;
