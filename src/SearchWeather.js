const SearchWeather = (props) => {
  return (
    <div className="searchWeather">
      <form>
        <label htmlFor="searchWeather">Szukaj: </label>
        <input type="text" id="searchWeather" />
      </form>
    </div>
  );
};

export default SearchWeather;
