import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parserItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parserItem = initialValue;
                } else {
                    parserItem = JSON.parse(localStorageItem);
                    setItem(parserItem);
                }

                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }, 2000);
    }, [])


    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return {
        item,
        saveItem,
        loading,
        error
    };
}


// const defaultTodos = [
//   { text: 'Completar curso de react intro', completed: true },
//   { text: 'Completar curso de ciberseguridad', completed: false },
//   { text: 'Completar curso de inteligencia emocional', completed: false },
//   { text: 'Completar curso de manipulación de array en js', completed: false },
//   { text: 'LALALALA', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

// localStorage.removeItem('TODOS_V1');


export { useLocalStorage };
