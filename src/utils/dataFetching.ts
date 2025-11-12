export const searchByName = async (drinkName: string) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(drinkName)}`);
    if (!response.ok){
        throw Error("Search by name failed");
    }
    return response.json();
}