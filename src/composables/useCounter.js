export default function useCounter() {
  const counterStore = useCounterStore();

  const increment = () => {
    counterStore.increment();
  };

  const decrement = () => {
    counterStore.decrement();
  };

  return {
    count: counterStore.count,
    increment,
    decrement,
  };
}
