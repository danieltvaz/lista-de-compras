import Header from "../../components/molecules/header";
import ListItem from "../../components/molecules/list-item";
import LoadingOverlay from "../../components/atoms/loading-overlay";
import MainContainer from "../../components/layout/main-container";
import SearchBar from "../../components/molecules/search-bar";
import TodoList from "../../components/molecules/todo-list";
import useList from "../../hooks/useList";

export default function ProductListPage() {
  const { items, addItem, removeItem, updateItem, loading, getItems } = useList();

  return (
    <MainContainer>
      <LoadingOverlay active={loading} />
      <Header />
      <SearchBar addItem={addItem} searchItem={getItems} />
      <TodoList>
        {items?.map((item) => (
          <ListItem item={item} key={item.id} removeItem={removeItem} updateItem={updateItem} />
        ))}
      </TodoList>
    </MainContainer>
  );
}
